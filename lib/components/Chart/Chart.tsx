import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Chart.module.css';
import type {
  ChartProps,
  ChartRenderContext,
  ChartSeries,
  SeriesClickArgs,
} from './chart-shared';
import {
  BASELINE_AXIS_TYPES,
  CATEGORY_AXIS_TYPES,
  PALETTE,
  VALUE_AXIS_TYPES,
  axisIntervals,
  niceScale,
  pointsFor,
  sliceColor,
} from './chart-shared';
import { renderRadarGrid, renderSeries } from './renderers';
import { tickLabel } from '../../utils/tick-label';

export type { ChartProps, ChartSeries, SeriesClickArgs };

export function Chart({
  series,
  width = 600,
  height = 400,
  valueAxis,
  categoryAxis,
  showLegend = true,
  stacked100Percent = false,
  tooltipVisible = true,
  onSeriesClick,
  ariaLabel = 'Chart',
  className,
}: ChartProps) {
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(
    null
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const isResponsive = typeof width === 'string' || typeof height === 'string';
  const [measured, setMeasured] = useState<{ w: number; h: number }>({
    w: typeof width === 'number' ? width : 600,
    h: typeof height === 'number' ? height : 400,
  });
  useEffect(() => {
    if (!isResponsive || !containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const w = el.clientWidth || 600;
      const h = el.clientHeight || 400;
      setMeasured({ w, h });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isResponsive]);

  const resolvedWidth = typeof width === 'number' ? width : measured.w;
  const resolvedHeight = typeof height === 'number' ? height : measured.h;

  const categories = useMemo(() => {
    const s = new Set<string>();
    for (const ser of series)
      for (const d of ser.data) s.add(String(d[ser.categoryProperty] ?? ''));
    return [...s];
  }, [series]);

  // Full-stacked mode: every stack group is normalized to percentages
  // per category, so groups always fill the axis. Unstacked series keep
  // raw values; mixing the two in one chart is allowed but unusual.
  const plotSeries = useMemo(() => {
    if (!stacked100Percent) return series;
    const totals = new Map<string, number>();
    for (const s of series) {
      if (!s.stack) continue;
      for (const d of s.data) {
        const key = `${s.stack}\u0000${String(d[s.categoryProperty] ?? '')}`;
        const v = Number(d[s.valueProperty]);
        if (!Number.isNaN(v)) totals.set(key, (totals.get(key) ?? 0) + v);
      }
    }
    return series.map((s) => {
      if (!s.stack) return s;
      return {
        ...s,
        data: s.data.map((d) => {
          const key = `${s.stack}\u0000${String(d[s.categoryProperty] ?? '')}`;
          const total = totals.get(key) ?? 0;
          const v = Number(d[s.valueProperty]);
          return {
            ...d,
            [s.valueProperty]:
              total > 0 && !Number.isNaN(v) ? (v / total) * 100 : 0,
          };
        }),
      };
    });
  }, [series, stacked100Percent]);

  const values = useMemo(() => {
    const out = plotSeries
      .flatMap((s) =>
        s.data.flatMap((d) => [
          Number(d[s.valueProperty]),
          ...(s.openProperty ? [Number(d[s.openProperty])] : []),
          ...(s.highProperty ? [Number(d[s.highProperty])] : []),
          ...(s.lowProperty ? [Number(d[s.lowProperty])] : []),
          ...(s.closeProperty ? [Number(d[s.closeProperty])] : []),
          // A range series is drawn between min and max, so both ends belong to
          // the domain — Radzen merges them (`RadzenRangeColumnSeries.razor.cs`).
          ...(s.minProperty ? [Number(d[s.minProperty])] : []),
          ...(s.maxProperty ? [Number(d[s.maxProperty])] : []),
        ])
      )
      .filter((n) => !Number.isNaN(n));
    // stacked series must fit the scale by their per-category totals,
    // not by the largest single value
    const stackTotals = new Map<string, Map<string, number>>();
    for (const s of plotSeries) {
      if (!s.stack) continue;
      let m = stackTotals.get(s.stack);
      if (!m) stackTotals.set(s.stack, (m = new Map()));
      for (const d of s.data) {
        const cat = String(d[s.categoryProperty] ?? '');
        const v = Number(d[s.valueProperty]);
        if (!Number.isNaN(v)) m.set(cat, (m.get(cat) ?? 0) + v);
      }
    }
    for (const m of stackTotals.values()) out.push(...m.values());
    return out;
  }, [plotSeries]);

  const pad = { t: 16, r: 16, b: 40, l: 56 };
  const plotW = resolvedWidth - pad.l - pad.r;
  const plotH = resolvedHeight - pad.t - pad.b;

  // Only a baseline-filled series drags the value axis down to 0 — column, bar,
  // area and anything stacked, which is Radzen's `zeroBased: true` set
  // (`RadzenColumnSeries.razor.cs:139` vs the `false` at `CartesianSeries.cs:554`).
  // Line and price series fit the plotted values instead, so a 99-112 candlestick
  // no longer collapses into the top few percent of a 0-125 axis.
  const zeroBased = plotSeries.some((s) => {
    if (s.stack) return true;
    if (s.minProperty && s.maxProperty) return false;
    return BASELINE_AXIS_TYPES.has(s.type);
  });
  const vMin =
    valueAxis?.min ??
    (values.length
      ? zeroBased
        ? Math.min(0, ...values)
        : Math.min(...values)
      : 0);
  const vMax = valueAxis?.max ?? (values.length ? Math.max(...values) : 10);
  const scale = useMemo(
    () => niceScale(vMin, vMax, valueAxis?.step, axisIntervals(plotH)),
    [vMin, vMax, valueAxis?.step, plotH]
  );

  // Radzen lays categories out as bands, not points (GAP-023): a mark is drawn
  // in the middle of its band, so the first one sits a half-band inside the
  // axis instead of straddling it. Half of the first column used to fall in the
  // value-label column and half of the last outside the plot.
  const bandW = plotW / Math.max(1, categories.length);
  const xFor = (catIdx: number) => pad.l + (catIdx + 0.5) * bandW;
  const yFor = (val: number) =>
    pad.t + (1 - (val - scale.min) / (scale.max - scale.min || 1)) * plotH;

  const colorFor = (idx: number, ser: ChartSeries) =>
    ser.color ?? PALETTE[idx % PALETTE.length]!;

  const fmt = valueAxis?.format ?? tickLabel;
  const catFmt = categoryAxis?.format ?? ((c: string) => c);

  // Pie/donut legend the categories, not the series: each slice carries its own
  // palette color, so one row per series would name a color nothing wears.
  const legend = series.flatMap((ser, i) =>
    ser.type === 'pie' || ser.type === 'donut'
      ? pointsFor(ser).map((p, j) => ({
          key: `${i}-${j}`,
          label: p.cat,
          color: sliceColor(ser, j),
        }))
      : [
          {
            key: `${i}`,
            label: ser.title ?? `Series ${i + 1}`,
            color: colorFor(i, ser),
          },
        ]
  );

  const showValueAxis = series.some((s) => VALUE_AXIS_TYPES.has(s.type));
  const showCategoryAxis = series.some((s) => CATEGORY_AXIS_TYPES.has(s.type));

  const ctx: ChartRenderContext = {
    categories,
    scale,
    pad,
    plotW,
    plotH,
    xFor,
    yFor,
    fmt,
    colorFor,
    tooltipVisible,
    percent: stacked100Percent,
    showTip: (x, y, text) => setTip({ x, y, text }),
    hideTip: () => setTip(null),
    handleClick: (ser, cat, val, item) =>
      onSeriesClick?.({
        seriesTitle: ser.title ?? '',
        category: cat,
        value: val,
        item,
      }),
    series: plotSeries,
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: typeof width === 'string' ? width : undefined,
        height: typeof height === 'string' ? height : undefined,
      }}
    >
      <figure
        className={[styles.root, className].filter(Boolean).join(' ')}
        role="img"
        aria-label={ariaLabel}
        aria-describedby={`${ariaLabel.replace(/\s+/g, '-')}-table`}
      >
        <svg
          width={resolvedWidth}
          height={resolvedHeight}
          className={styles.svg}
          role="presentation"
        >
          {showValueAxis &&
            valueAxis?.gridlines !== false &&
            scale.ticks.map((t) => (
              <line
                key={t}
                x1={pad.l}
                x2={pad.l + plotW}
                y1={yFor(t)}
                y2={yFor(t)}
                className={styles.gridline}
              />
            ))}
          {showCategoryAxis &&
            categoryAxis?.gridlines &&
            categories.map((_, i) => (
              <line
                key={i}
                x1={xFor(i)}
                x2={xFor(i)}
                y1={pad.t}
                y2={pad.t + plotH}
                className={styles.gridline}
              />
            ))}
          {showValueAxis &&
            scale.ticks.map((t) => (
              <text
                key={t}
                x={pad.l - 8}
                y={yFor(t) + 4}
                textAnchor="end"
                className={styles.tickLabel}
              >
                {stacked100Percent ? `${fmt(t)}%` : fmt(t)}
              </text>
            ))}
          {showCategoryAxis &&
            categories.map((c, i) => (
              <text
                key={c}
                x={xFor(i)}
                y={pad.t + plotH + 16}
                textAnchor="middle"
                className={styles.tickLabel}
              >
                {catFmt(c)}
              </text>
            ))}
          {showValueAxis && valueAxis?.title && (
            <text
              x={12}
              y={pad.t + plotH / 2}
              textAnchor="middle"
              transform={`rotate(-90,12,${pad.t + plotH / 2})`}
              className={styles.axisTitle}
            >
              {valueAxis.title}
            </text>
          )}
          {showCategoryAxis && categoryAxis?.title && (
            <text
              x={pad.l + plotW / 2}
              y={resolvedHeight - 4}
              textAnchor="middle"
              className={styles.axisTitle}
            >
              {categoryAxis.title}
            </text>
          )}
          {(series.some((s) => s.type === 'radar') ||
            series.some((s) => s.type === 'spider')) &&
            renderRadarGrid(ctx)}
          {plotSeries.map((ser, sIdx) => renderSeries(ctx, ser, sIdx))}
        </svg>
        {tip && (
          <div
            className={styles.tooltip}
            style={{ left: tip.x, top: tip.y - 28 }}
          >
            {tip.text}
          </div>
        )}
        {showLegend && (
          <div className={styles.legend}>
            {legend.map((entry) => (
              <span key={entry.key} className={styles.legendItem}>
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: entry.color }}
                  aria-hidden="true"
                />
                {entry.label}
              </span>
            ))}
          </div>
        )}
        <table
          className={styles.visuallyHidden}
          id={`${ariaLabel.replace(/\s+/g, '-')}-table`}
        >
          <caption>{ariaLabel}</caption>
          <thead>
            <tr>
              <th>Series</th>
              <th>Category</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {series.map((ser) =>
              ser.data.map((d, j) => (
                <tr key={`${ser.title}-${j}`}>
                  <td>{ser.title ?? ''}</td>
                  <td>
                    {ser.rowProperty
                      ? `${String(d[ser.rowProperty] ?? '')} / ${String(d[ser.categoryProperty] ?? '')}`
                      : String(d[ser.categoryProperty] ?? '')}
                  </td>
                  <td>{String(d[ser.valueProperty] ?? '')}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </figure>
    </div>
  );
}
