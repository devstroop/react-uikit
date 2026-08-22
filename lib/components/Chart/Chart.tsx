import { useMemo, useState } from "react";
import styles from "./Chart.module.css";

export type SeriesClickArgs = { seriesTitle: string; category: string; value: number; item: Record<string, unknown> };

export interface ChartSeries {
  type: "line" | "area" | "bar" | "column";
  data: Record<string, unknown>[];
  categoryProperty: string;
  valueProperty: string;
  title?: string;
  color?: string;
  labels?: { visible?: boolean };
}

export interface ChartProps {
  series: ChartSeries[];
  width?: number;
  height?: number;
  valueAxis?: { min?: number; max?: number; step?: number; title?: string; gridlines?: boolean };
  categoryAxis?: { title?: string; gridlines?: boolean };
  showLegend?: boolean;
  tooltipVisible?: boolean;
  onSeriesClick?: (args: SeriesClickArgs) => void;
  ariaLabel?: string;
  className?: string;
}

const PALETTE = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)",
];

function niceScale(min: number, max: number, step?: number) {
  const range = max - min || 1;
  const raw = step ?? Math.pow(10, Math.floor(Math.log10(range / 4)));
  const nMin = Math.floor(min / raw) * raw;
  const nMax = Math.ceil(max / raw) * raw;
  const ticks: number[] = [];
  for (let v = nMin; v <= nMax + 1e-9; v += raw) ticks.push(Number(v.toFixed(6)));
  return { min: nMin, max: nMax, step: raw, ticks };
}

export function Chart({
  series,
  width = 600,
  height = 400,
  valueAxis,
  categoryAxis,
  showLegend = true,
  tooltipVisible = true,
  onSeriesClick,
  ariaLabel = "Chart",
  className,
}: ChartProps) {
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);

  // categories = union of categoryProperty values across first series data
  const categories = useMemo(() => {
    const s = new Set<string>();
    for (const ser of series) for (const d of ser.data) s.add(String(d[ser.categoryProperty] ?? ""));
    return [...s];
  }, [series]);

  const values = useMemo(() => series.flatMap((s) => s.data.map((d) => Number(d[s.valueProperty]))).filter((n) => !Number.isNaN(n)), [series]);
  const vMin = valueAxis?.min ?? (values.length ? Math.min(0, ...values) : 0);
  const vMax = valueAxis?.max ?? (values.length ? Math.max(...values) : 10);
  const scale = useMemo(() => niceScale(vMin, vMax, valueAxis?.step), [vMin, vMax, valueAxis?.step]);

  const pad = { t: 16, r: 16, b: 40, l: 56 };
  const plotW = width - pad.l - pad.r;
  const plotH = height - pad.t - pad.b;

  const xFor = (catIdx: number) => pad.l + (catIdx / Math.max(1, categories.length - 1)) * plotW;
  const yFor = (val: number) => pad.t + (1 - (val - scale.min) / (scale.max - scale.min || 1)) * plotH;

  const colorFor = (idx: number, ser: ChartSeries) => ser.color ?? PALETTE[idx % PALETTE.length]!;

  return (
    <figure className={[styles.root, className].filter(Boolean).join(" ")} role="img" aria-label={ariaLabel} aria-describedby={`${ariaLabel.replace(/\s+/g, "-")}-table`}>
      <svg width={width} height={height} className={styles.svg} role="presentation">
        {/* gridlines */}
        {valueAxis?.gridlines !== false &&
          scale.ticks.map((t) => (
            <line key={t} x1={pad.l} x2={pad.l + plotW} y1={yFor(t)} y2={yFor(t)} className={styles.gridline} />
          ))}
        {categoryAxis?.gridlines &&
          categories.map((_, i) => (
            <line key={i} x1={xFor(i)} x2={xFor(i)} y1={pad.t} y2={pad.t + plotH} className={styles.gridline} />
          ))}
        {/* axes labels */}
        {scale.ticks.map((t) => (
          <text key={t} x={pad.l - 8} y={yFor(t) + 4} textAnchor="end" className={styles.tickLabel}>
            {t}
          </text>
        ))}
        {categories.map((c, i) => (
          <text key={c} x={xFor(i)} y={pad.t + plotH + 16} textAnchor="middle" className={styles.tickLabel}>
            {c}
          </text>
        ))}
        {valueAxis?.title && (
          <text x={12} y={pad.t + plotH / 2} textAnchor="middle" transform={`rotate(-90,12,${pad.t + plotH / 2})`} className={styles.axisTitle}>
            {valueAxis.title}
          </text>
        )}
        {categoryAxis?.title && (
          <text x={pad.l + plotW / 2} y={height - 4} textAnchor="middle" className={styles.axisTitle}>
            {categoryAxis.title}
          </text>
        )}
        {/* series */}
        {series.map((ser, sIdx) => {
          const pts = ser.data.map((d) => ({
            cat: String(d[ser.categoryProperty] ?? ""),
            val: Number(d[ser.valueProperty]),
            item: d,
          }));
          const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
          const color = colorFor(sIdx, ser);
          if (ser.type === "line" || ser.type === "area") {
            const d = pts
              .map((p) => {
                const ci = cIdxMap.get(p.cat) ?? 0;
                return `${ci === 0 ? "M" : "L"} ${xFor(ci)} ${yFor(p.val)}`;
              })
              .join(" ");
            return (
              <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
                <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
                {ser.type === "area" && <path d={`${d} L ${xFor(pts.length - 1)} ${yFor(scale.min)} L ${xFor(0)} ${yFor(scale.min)} Z`} fill={color} fillOpacity={0.25} stroke="none" />}
                <path d={d} fill="none" stroke={color} strokeWidth={2} />
                {pts.map((p, i) => {
                  const ci = cIdxMap.get(p.cat) ?? 0;
                  const x = xFor(ci);
                  const y = yFor(p.val);
                  return (
                    <g key={i} role="listitem">
                      <circle cx={x} cy={y} r={4} fill={color} stroke="var(--dt-color-surface)" strokeWidth={1.5} />
                      <rect
                        x={x - 12}
                        y={y - 12}
                        width={24}
                        height={24}
                        fill="transparent"
                        onMouseEnter={() => tooltipVisible && setTip({ x, y, text: `${ser.title ?? p.cat}: ${p.val}` })}
                        onMouseLeave={() => setTip(null)}
                        onFocus={() => tooltipVisible && setTip({ x, y, text: `${ser.title ?? p.cat}: ${p.val}` })}
                        onBlur={() => setTip(null)}
                        onClick={() => onSeriesClick?.({ seriesTitle: ser.title ?? "", category: p.cat, value: p.val, item: p.item })}
                        style={{ cursor: "pointer" }}
                      />
                      {ser.labels?.visible && (
                        <text x={x} y={y - 8} textAnchor="middle" className={styles.dataLabel}>
                          {p.val}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          }
          // bar (horizontal) / column (vertical)
          const isBar = ser.type === "bar";
          return (
            <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
              <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
              {pts.map((p, i) => {
                const ci = cIdxMap.get(p.cat) ?? 0;
                const nSeries = series.length;
                const groupW = plotW / categories.length;
                const barW = (isBar ? 18 : Math.max(12, groupW / nSeries - 4));
                const x = isBar ? pad.l : xFor(ci) - (nSeries * barW) / 2 + sIdx * barW + 2;
                const y = isBar ? pad.t + (ci * plotH) / categories.length + 4 : yFor(p.val);
                const w = isBar ? ((p.val - scale.min) / (scale.max - scale.min || 1)) * plotW : barW - 4;
                const h = isBar ? 16 : pad.t + plotH - yFor(p.val);
                const rx = isBar ? x : x;
                const ry = isBar ? y : y;
                return (
                  <g key={i} role="listitem">
                    <rect
                      x={rx}
                      y={ry}
                      width={w}
                      height={h}
                      fill={color}
                      rx={2}
                      onMouseEnter={() => tooltipVisible && setTip({ x: rx + w / 2, y: ry, text: `${ser.title ?? p.cat}: ${p.val}` })}
                      onMouseLeave={() => setTip(null)}
                      onClick={() => onSeriesClick?.({ seriesTitle: ser.title ?? "", category: p.cat, value: p.val, item: p.item })}
                      style={{ cursor: "pointer" }}
                    />
                    {ser.labels?.visible && (
                      <text x={rx + w / 2} y={ry - 4} textAnchor="middle" className={styles.dataLabel}>
                        {p.val}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      {tip && (
        <div className={styles.tooltip} style={{ left: tip.x, top: tip.y - 28 }}>
          {tip.text}
        </div>
      )}
      {showLegend && (
        <div className={styles.legend}>
          {series.map((ser, i) => (
            <span key={i} className={styles.legendItem}>
              <span className={styles.swatch} style={{ backgroundColor: colorFor(i, ser) }} aria-hidden="true" />
              {ser.title ?? `Series ${i + 1}`}
            </span>
          ))}
        </div>
      )}
      {/* a11y fallback table */}
      <table className={styles.visuallyHidden} id={`${ariaLabel.replace(/\s+/g, "-")}-table`}>
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
                <td>{ser.title ?? ""}</td>
                <td>{String(d[ser.categoryProperty] ?? "")}</td>
                <td>{String(d[ser.valueProperty] ?? "")}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </figure>
  );
}
