import { useMemo, useState } from "react";
import styles from "./Chart.module.css";

export type SeriesClickArgs = { seriesTitle: string; category: string; value: number; item: Record<string, unknown> };

export interface ChartSeries {
  type: "line" | "area" | "bar" | "column" | "scatter" | "bubble" | "pie" | "donut";
  data: Record<string, unknown>[];
  categoryProperty: string;
  valueProperty: string;
  title?: string;
  color?: string;
  stack?: string;
  labels?: { visible?: boolean };
  innerRadius?: number;
  sizeProperty?: string;
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
        {(() => {
          // stacking: group bar/column/area/line by stack name, sum per category
          const stackSums = new Map<string, Map<string, number>>();
          for (const ser of series) {
            if (!ser.stack) continue;
            for (const d of ser.data) {
              const cat = String(d[ser.categoryProperty] ?? "");
              const val = Number(d[ser.valueProperty]);
              if (Number.isNaN(val)) continue;
              if (!stackSums.has(ser.stack)) stackSums.set(ser.stack, new Map());
              const m = stackSums.get(ser.stack)!;
              m.set(cat, (m.get(cat) ?? 0) + val);
            }
          }
          // pie/donut totals for arc angles
          const pieGroups = series.filter((s) => s.type === "pie" || s.type === "donut");
          const pieTotals = new Map<string, number>();
          for (const ser of pieGroups) {
            const total = ser.data.reduce((sum, d) => sum + (Number(d[ser.valueProperty]) || 0), 0);
            pieTotals.set(ser.title ?? String(pieGroups.indexOf(ser)), total);
          }
          return series.map((ser, sIdx) => {
            const pts = ser.data.map((d) => ({
              cat: String(d[ser.categoryProperty] ?? ""),
              val: Number(d[ser.valueProperty]),
              size: ser.sizeProperty ? Number(d[ser.sizeProperty]) : undefined,
              item: d,
            }));
            const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
            const color = colorFor(sIdx, ser);
            if (ser.type === "pie" || ser.type === "donut") {
              const cx = pad.l + plotW / 2;
              const cy = pad.t + plotH / 2;
              const outerR = Math.min(plotW, plotH) / 3;
              const innerR = ser.type === "donut" ? (ser.innerRadius ?? outerR * 0.5) : 0;
              const total = pieTotals.get(ser.title ?? String(sIdx)) ?? pts.reduce((s, p) => s + p.val, 0);
              let angle = -90;
              return (
                <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
                  <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
                  {pts.map((p, i) => {
                    const sweep = total ? (p.val / total) * 360 : 0;
                    const start = angle;
                    const end = angle + sweep;
                    angle = end;
                    const large = sweep > 180 ? 1 : 0;
                    const rad = (deg: number) => (deg * Math.PI) / 180;
                    const x1 = cx + outerR * Math.cos(rad(start));
                    const y1 = cy + outerR * Math.sin(rad(start));
                    const x2 = cx + outerR * Math.cos(rad(end));
                    const y2 = cy + outerR * Math.sin(rad(end));
                    const x3 = cx + innerR * Math.cos(rad(end));
                    const y3 = cy + innerR * Math.sin(rad(end));
                    const x4 = cx + innerR * Math.cos(rad(start));
                    const y4 = cy + innerR * Math.sin(rad(start));
                    const d = innerR
                      ? `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${large} 0 ${x4} ${y4} Z`
                      : `M ${cx} ${cy} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} Z`;
                    const mid = (start + end) / 2;
                    const lx = cx + (outerR + 12) * Math.cos(rad(mid));
                    const ly = cy + (outerR + 12) * Math.sin(rad(mid));
                    return (
                      <g key={i} role="listitem">
                        <path
                          d={d}
                          fill={color}
                          stroke="var(--dt-color-surface)"
                          strokeWidth={1}
                          onMouseEnter={() => tooltipVisible && setTip({ x: lx, y: ly, text: `${ser.title ?? p.cat}: ${p.val}` })}
                          onMouseLeave={() => setTip(null)}
                          onClick={() => onSeriesClick?.({ seriesTitle: ser.title ?? "", category: p.cat, value: p.val, item: p.item })}
                          style={{ cursor: "pointer" }}
                        />
                        {ser.labels?.visible && (
                          <text x={lx} y={ly} textAnchor="middle" className={styles.dataLabel}>
                            {p.val}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            }
            if (ser.type === "scatter" || ser.type === "bubble") {
              return (
                <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
                  <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
                  {pts.map((p, i) => {
                    const ci = cIdxMap.get(p.cat) ?? 0;
                    // for scatter/bubble, category is numeric x, value is y
                    const xVal = Number(pts[i]!.cat);
                    const x = Number.isNaN(xVal) ? xFor(ci) : pad.l + ((xVal - scale.min) / (scale.max - scale.min || 1)) * plotW;
                    const y = yFor(p.val);
                    const r = ser.type === "bubble" && p.size !== undefined ? Math.max(4, Math.min(12, p.size / 10)) : 4;
                    return (
                      <g key={i} role="listitem">
                        <circle cx={x} cy={y} r={r} fill={color} stroke="var(--dt-color-surface)" strokeWidth={1.5} />
                        <circle
                          cx={x}
                          cy={y}
                          r={12}
                          fill="transparent"
                          onMouseEnter={() => tooltipVisible && setTip({ x, y, text: `${ser.title ?? p.cat}: ${p.val}` })}
                          onMouseLeave={() => setTip(null)}
                          onClick={() => onSeriesClick?.({ seriesTitle: ser.title ?? "", category: p.cat, value: p.val, item: p.item })}
                          style={{ cursor: "pointer" }}
                        />
                      </g>
                    );
                  })}
                </g>
              );
            }
            if (ser.type === "line" || ser.type === "area") {
              // stacking for line/area: accumulate previous stack values per category
              const baseFor = (cat: string) => {
                if (!ser.stack) return scale.min;
                let sum = 0;
                for (let j = 0; j < sIdx; j++) {
                  const prev = series[j];
                  if (prev?.stack !== ser.stack) continue;
                  const found = prev.data.find((d) => String(d[prev.categoryProperty] ?? "") === cat);
                  if (found) sum += Number(found[prev.valueProperty]) || 0;
                }
                return sum;
              };
              const d = pts
                .map((p) => {
                  const ci = cIdxMap.get(p.cat) ?? 0;
                  const base = baseFor(p.cat);
                  return `${ci === 0 ? "M" : "L"} ${xFor(ci)} ${yFor(base + p.val)}`;
                })
                .join(" ");
              const baseD = pts
                .map((p) => {
                  const ci = cIdxMap.get(p.cat) ?? 0;
                  const base = baseFor(p.cat);
                  return `${ci === 0 ? "M" : "L"} ${xFor(ci)} ${yFor(base)}`;
                })
                .join(" ");
              return (
                <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
                  <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
                  {ser.type === "area" && (
                    <path d={`${d} L ${xFor(pts.length - 1)} ${yFor(baseFor(pts[pts.length - 1]!.cat))} L ${xFor(0)} ${yFor(baseFor(pts[0]!.cat))} Z`} fill={color} fillOpacity={0.25} stroke="none" />
                  )}
                  <path d={d} fill="none" stroke={color} strokeWidth={2} />
                  {/* baseline for stacking visual */}
                  {ser.stack && <path d={baseD} fill="none" stroke="transparent" />}
                  {pts.map((p, i) => {
                    const ci = cIdxMap.get(p.cat) ?? 0;
                    const base = baseFor(p.cat);
                    const x = xFor(ci);
                    const y = yFor(base + p.val);
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
            // bar (horizontal) / column (vertical) with stacking
            const isBar = ser.type === "bar";
            return (
              <g key={sIdx} role="list" aria-label={ser.title ?? `Series ${sIdx + 1}`}>
                <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
                {pts.map((p, i) => {
                  const ci = cIdxMap.get(p.cat) ?? 0;
                  // stacking offset: sum of previous series in same stack for this category
                  let stackOffset = 0;
                  if (ser.stack) {
                    for (let j = 0; j < sIdx; j++) {
                      const prev = series[j];
                      if (prev?.stack !== ser.stack) continue;
                      const found = prev.data.find((d) => String(d[prev.categoryProperty] ?? "") === p.cat);
                      if (found) stackOffset += Number(found[prev.valueProperty]) || 0;
                    }
                  }
                  const stackedVal = stackOffset + p.val;
                  const nSeries = series.filter((s) => !s.stack || s.stack === ser.stack).length; // not used for stacked; keep simple
                  const groupW = plotW / categories.length;
                  const barW = isBar ? 18 : Math.max(12, groupW / (ser.stack ? 1 : series.length) - 4);
                  const x = isBar ? pad.l + (stackOffset / (scale.max - scale.min || 1)) * plotW : xFor(ci) - barW / 2 + (ser.stack ? 0 : (sIdx % nSeries) * barW);
                  const y = isBar ? pad.t + (ci * plotH) / categories.length + 4 : yFor(stackedVal);
                  const w = isBar ? ((p.val) / (scale.max - scale.min || 1)) * plotW : barW - 4;
                  const h = isBar ? 16 : yFor(stackOffset) - yFor(stackedVal);
                  const rx = isBar ? pad.l + (stackOffset / (scale.max - scale.min || 1)) * plotW : x;
                  const ry = isBar ? pad.t + (ci * plotH) / categories.length + 4 : y;
                  return (
                    <g key={i} role="listitem">
                      <rect
                        x={rx}
                        y={ry}
                        width={isBar ? w : barW - 4}
                        height={isBar ? h : h}
                        fill={color}
                        rx={2}
                        onMouseEnter={() => tooltipVisible && setTip({ x: rx + (isBar ? w : barW) / 2, y: ry, text: `${ser.title ?? p.cat}: ${p.val}` })}
                        onMouseLeave={() => setTip(null)}
                        onClick={() => onSeriesClick?.({ seriesTitle: ser.title ?? "", category: p.cat, value: p.val, item: p.item })}
                        style={{ cursor: "pointer" }}
                      />
                      {ser.labels?.visible && (
                        <text x={rx + (isBar ? w : barW) / 2} y={ry - 4} textAnchor="middle" className={styles.dataLabel}>
                          {p.val}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          });
        })()}
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
