import type { ReactNode } from 'react';
import type {
  ChartPoint,
  ChartRenderContext,
  ChartSeries,
} from './chart-shared';
import { pointsFor } from './chart-shared';
import styles from './Chart.module.css';

function seriesHead(
  sIdx: number,
  ser: ChartSeries,
  children: ReactNode
): ReactNode {
  return (
    <g
      key={sIdx}
      data-chart-type={ser.type}
      role="list"
      aria-label={ser.title ?? `Series ${sIdx + 1}`}
    >
      <title>{ser.title ?? `Series ${sIdx + 1}`}</title>
      {children}
    </g>
  );
}

const rad = (deg: number): number => (deg * Math.PI) / 180;

/**
 * Point marker honoring the series markers contract (uikit#95): shape +
 * size configurable, visible by default. The invisible-translucent hit
 * areas stay separate so hiding markers never kills pointer targets.
 */
function renderMarker(
  x: number,
  y: number,
  color: string,
  ser: ChartSeries,
  fallbackR: number
): ReactNode {
  const markers = ser.markers ?? {};
  if (markers.visible === false) return null;
  const shape = markers.shape ?? 'circle';
  const r = markers.size ?? fallbackR;
  const stroke = 'var(--dx-surface-color)';
  if (shape === 'square') {
    return (
      <rect
        x={x - r}
        y={y - r}
        width={r * 2}
        height={r * 2}
        fill={color}
        stroke={stroke}
        strokeWidth={1.5}
      />
    );
  }
  if (shape === 'diamond') {
    return (
      <path
        d={`M ${x} ${y - r} L ${x + r} ${y} L ${x} ${y + r} L ${x - r} ${y} Z`}
        fill={color}
        stroke={stroke}
        strokeWidth={1.5}
      />
    );
  }
  if (shape === 'triangle') {
    return (
      <path
        d={`M ${x} ${y - r} L ${x + r} ${y + r} L ${x - r} ${y + r} Z`}
        fill={color}
        stroke={stroke}
        strokeWidth={1.5}
      />
    );
  }
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      stroke={stroke}
      strokeWidth={1.5}
    />
  );
}

function dashAttr(dash: ChartSeries['dash']): string | undefined {
  if (dash == null) return undefined;
  return typeof dash === 'string' ? dash : dash.join(' ');
}

function fmtVal(ctx: ChartRenderContext, val: number): string {
  return ctx.percent ? `${val}%` : String(val);
}

const CARTESIAN_SOURCE_TYPES = new Set([
  'line',
  'area',
  'bar',
  'column',
  'scatter',
  'bubble',
]);

/**
 * Derived-series source lookup (uikit#95): explicit `source` title wins,
 * otherwise the nearest previous cartesian series. Returns null when
 * nothing usable is found.
 */
function derivedSource(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number
): ChartSeries | null {
  if (ser.source) {
    const named = ctx.series.find(
      (s, j) => j !== sIdx && s.title === ser.source
    );
    return named ?? null;
  }
  for (let j = sIdx - 1; j >= 0; j--) {
    const prev = ctx.series[j];
    if (prev && CARTESIAN_SOURCE_TYPES.has(prev.type)) return prev;
  }
  return null;
}

/**
 * Trendline (least-squares fit) and moving average, rendered by
 * synthesizing plain line series so stroke/marker/label/tooltip
 * semantics stay identical to hand-authored lines.
 */
function renderDerived(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  color: string
): ReactNode {
  const src = derivedSource(ctx, ser, sIdx);
  if (!src) return null;
  const srcPts = pointsFor(src).filter((p) => !Number.isNaN(p.val));
  if (srcPts.length === 0) return null;
  const cats = srcPts.map((p) => p.cat);
  let fitted: Array<{ cat: string; val: number }>;
  if (ser.type === 'trendline') {
    const n = srcPts.length;
    const xs = srcPts.map((_, i) => i);
    const ys = srcPts.map((p) => p.val);
    const meanX = xs.reduce((a, b) => a + b, 0) / n;
    const meanY = ys.reduce((a, b) => a + b, 0) / n;
    let num = 0;
    let den = 0;
    for (let i = 0; i < n; i++) {
      num += (xs[i]! - meanX) * (ys[i]! - meanY);
      den += (xs[i]! - meanX) * (xs[i]! - meanX);
    }
    const slope = den === 0 ? 0 : num / den;
    fitted = cats.map((cat, i) => ({
      cat,
      val: meanY + slope * (i - meanX),
    }));
  } else {
    const period = Math.max(1, Math.floor(ser.period ?? 3));
    fitted = srcPts
      .map((p, i) => {
        if (i + 1 < period) return null;
        const window = srcPts.slice(i + 1 - period, i + 1);
        return {
          cat: p.cat,
          val: window.reduce((a, q) => a + q.val, 0) / period,
        };
      })
      .filter((p): p is { cat: string; val: number } => p != null);
  }
  if (fitted.length === 0) return null;
  const synthetic: ChartSeries = {
    ...ser,
    stack: undefined,
    categoryProperty: '__cat',
    valueProperty: '__val',
    data: fitted.map((p, k) => ({
      __cat: p.cat,
      __val: p.val,
      __item: srcPts[k + (srcPts.length - fitted.length)]?.item,
    })),
    markers: { ...(ser.markers ?? {}), visible: ser.markers?.visible ?? false },
  };
  const synthPts = pointsFor(synthetic).map((p) => ({
    ...p,
    item: (p.item.__item as Record<string, unknown>) ?? p.item,
  }));
  return renderLine(ctx, synthetic, sIdx, synthPts, color);
}

/**
 * Range band for line/area series carrying minProperty+maxProperty
 * (uikit#95): polygon between the per-point min/max. Returns null unless
 * every point resolves both ends numerically.
 */
function rangeBand(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  pts: ChartPoint[]
): ReactNode {
  if (pts.length === 0) return null;
  const { xFor, yFor, categories } = ctx;
  const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
  const bounds = pts.map((p) => {
    const ci = cIdxMap.get(p.cat) ?? 0;
    const lo = p.min;
    const hi = p.max;
    if (typeof lo !== 'number' || Number.isNaN(lo)) return null;
    if (typeof hi !== 'number' || Number.isNaN(hi)) return null;
    return { x: xFor(ci), lo: yFor(lo), hi: yFor(hi) };
  });
  if (bounds.some((b) => b == null)) return null;
  const top = bounds.map((b) => `L ${b!.x} ${b!.hi}`).join(' ');
  const bottom = [...bounds]
    .reverse()
    .map((b) => `L ${b!.x} ${b!.lo}`)
    .join(' ');
  const first = bounds[0]!;
  return (
    <path
      d={`M ${first.x} ${first.hi} ${top} ${bottom} Z`}
      fill={ctx.colorFor(0, ser)}
      fillOpacity={0.35}
      stroke="none"
    />
  );
}

function renderPie(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH } = ctx;
  const cx = pad.l + plotW / 2;
  const cy = pad.t + plotH / 2;
  const outerR = Math.min(plotW, plotH) / 3;
  const innerR = ser.type === 'donut' ? (ser.innerRadius ?? outerR * 0.5) : 0;
  const total = pts.reduce((sum, p) => sum + (Number(p.val) || 0), 0);
  let angle = -90;
  return seriesHead(
    sIdx,
    ser,
    pts.map((p, i) => {
      const sweep = total ? (p.val / total) * 360 : 0;
      const start = angle;
      const end = angle + sweep;
      angle = end;
      const large = sweep > 180 ? 1 : 0;
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
            stroke="var(--dx-surface-color)"
            strokeWidth={1}
            onMouseEnter={() =>
              ctx.tooltipVisible &&
              ctx.showTip(lx, ly, `${ser.title ?? p.cat}: ${p.val}`)
            }
            onMouseLeave={() => ctx.hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
            style={{ cursor: 'pointer' }}
          />
          {ser.labels?.visible && (
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              className={styles.dataLabel}
            >
              {p.val}
            </text>
          )}
        </g>
      );
    })
  );
}

function renderPoints(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, scale, xFor, yFor, categories } = ctx;
  const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
  return seriesHead(
    sIdx,
    ser,
    pts.map((p, i) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      // for scatter/bubble, category is numeric x, value is y
      const xVal = Number(pts[i]!.cat);
      const x = Number.isNaN(xVal)
        ? xFor(ci)
        : pad.l + ((xVal - scale.min) / (scale.max - scale.min || 1)) * plotW;
      const y = yFor(p.val);
      const r =
        ser.type === 'bubble' && p.size !== undefined
          ? Math.max(4, Math.min(12, p.size / 10))
          : 4;
      return (
        <g key={i} role="listitem">
          {renderMarker(x, y, color, ser, r)}
          <circle
            cx={x}
            cy={y}
            r={12}
            fill="transparent"
            onMouseEnter={() =>
              ctx.tooltipVisible &&
              ctx.showTip(x, y, `${ser.title ?? p.cat}: ${p.val}`)
            }
            onMouseLeave={() => ctx.hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
            style={{ cursor: 'pointer' }}
          />
        </g>
      );
    })
  );
}

function renderLine(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { scale, xFor, yFor, categories, series } = ctx;
  const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
  // stacking for line/area: accumulate previous stack values per category
  const baseFor = (cat: string) => {
    if (!ser.stack) return scale.min;
    let sum = 0;
    for (let j = 0; j < sIdx; j++) {
      const prev = series[j];
      if (prev?.stack !== ser.stack) continue;
      const found = prev.data.find(
        (d) => String(d[prev.categoryProperty] ?? '') === cat
      );
      if (found) sum += Number(found[prev.valueProperty]) || 0;
    }
    return sum;
  };
  const d = pts
    .map((p, i) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      const base = baseFor(p.cat);
      return `${i === 0 ? 'M' : 'L'} ${xFor(ci)} ${yFor(base + p.val)}`;
    })
    .join(' ');
  const baseD = pts
    .map((p, i) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      const base = baseFor(p.cat);
      return `${i === 0 ? 'M' : 'L'} ${xFor(ci)} ${yFor(base)}`;
    })
    .join(' ');
  return seriesHead(
    sIdx,
    ser,
    <>
      {ser.type === 'area' && (
        <path
          d={`${d} L ${xFor(pts.length - 1)} ${yFor(baseFor(pts[pts.length - 1]!.cat))} L ${xFor(0)} ${yFor(baseFor(pts[0]!.cat))} Z`}
          fill={color}
          fillOpacity={0.25}
          stroke="none"
        />
      )}
      {rangeBand(ctx, ser, pts)}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={ser.lineWidth ?? 2}
        strokeDasharray={dashAttr(ser.dash)}
      />
      {/* baseline for stacking visual */}
      {ser.stack && <path d={baseD} fill="none" stroke="transparent" />}
      {pts.map((p, i) => {
        const ci = cIdxMap.get(p.cat) ?? 0;
        const base = baseFor(p.cat);
        const x = xFor(ci);
        const y = yFor(base + p.val);
        return (
          <g key={i} role="listitem">
            {renderMarker(x, y, color, ser, 4)}
            <rect
              x={x - 12}
              y={y - 12}
              width={24}
              height={24}
              fill="transparent"
              onMouseEnter={() =>
                ctx.tooltipVisible &&
                ctx.showTip(
                  x,
                  y,
                  `${ser.title ?? p.cat}: ${fmtVal(ctx, p.val)}`
                )
              }
              onMouseLeave={() => ctx.hideTip()}
              onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
              style={{ cursor: 'pointer' }}
            />
            {ser.labels?.visible && (
              <text
                x={x}
                y={y - 8}
                textAnchor="middle"
                className={styles.dataLabel}
              >
                {fmtVal(ctx, p.val)}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

function renderBars(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, scale, xFor, yFor, categories, series } = ctx;
  const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
  const isBar = ser.type === 'bar';
  return seriesHead(
    sIdx,
    ser,
    pts.map((p, i) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      // stacking offset: sum of previous series in same stack for this category
      let stackOffset = 0;
      if (ser.stack) {
        for (let j = 0; j < sIdx; j++) {
          const prev = series[j];
          if (prev?.stack !== ser.stack) continue;
          const found = prev.data.find(
            (d) => String(d[prev.categoryProperty] ?? '') === p.cat
          );
          if (found) stackOffset += Number(found[prev.valueProperty]) || 0;
        }
      }
      const stackedVal = stackOffset + p.val;
      // Range bars (uikit#95): when min+max resolve numerically the bar
      // spans [min, max] instead of [base, value]. Stacked + range mixes
      // keep the stack offset applied to both ends.
      const hasRange =
        typeof p.min === 'number' &&
        !Number.isNaN(p.min) &&
        typeof p.max === 'number' &&
        !Number.isNaN(p.max);
      const nSeries = series.filter(
        (s) => !s.stack || s.stack === ser.stack
      ).length;
      const groupW = plotW / Math.max(1, categories.length);
      const barW = isBar
        ? 18
        : Math.max(12, groupW / (ser.stack ? 1 : series.length) - 4);
      const x = isBar
        ? pad.l + (stackOffset / (scale.max - scale.min || 1)) * plotW
        : xFor(ci) - barW / 2 + (ser.stack ? 0 : (sIdx % nSeries) * barW);
      const y = isBar
        ? pad.t + (ci * plotH) / Math.max(1, categories.length) + 4
        : hasRange
          ? yFor(stackOffset + p.max!)
          : yFor(stackedVal);
      const w = isBar
        ? hasRange
          ? ((p.max! - p.min!) / (scale.max - scale.min || 1)) * plotW
          : (p.val / (scale.max - scale.min || 1)) * plotW
        : barW - 4;
      const h = isBar
        ? 16
        : hasRange
          ? yFor(stackOffset + p.min!) - yFor(stackOffset + p.max!)
          : yFor(stackOffset) - yFor(stackedVal);
      const rx = isBar
        ? pad.l +
          ((stackOffset + (hasRange ? p.min! : 0)) /
            (scale.max - scale.min || 1)) *
            plotW
        : x;
      const ry = isBar
        ? pad.t + (ci * plotH) / Math.max(1, categories.length) + 4
        : y;
      return (
        <g key={i} role="listitem">
          <rect
            x={rx}
            y={ry}
            width={isBar ? w : barW - 4}
            height={isBar ? h : h}
            fill={color}
            rx={2}
            onMouseEnter={() =>
              ctx.tooltipVisible &&
              ctx.showTip(
                rx + (isBar ? w : barW) / 2,
                ry,
                `${ser.title ?? p.cat}: ${fmtVal(ctx, p.val)}`
              )
            }
            onMouseLeave={() => ctx.hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
            style={{ cursor: 'pointer' }}
          />
          {ser.labels?.visible && (
            <text
              x={rx + (isBar ? w : barW) / 2}
              y={ry - 4}
              textAnchor="middle"
              className={styles.dataLabel}
            >
              {fmtVal(ctx, p.val)}
            </text>
          )}
        </g>
      );
    })
  );
}

function renderGauge(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, scale, tooltipVisible, showTip, hideTip } = ctx;
  const cx = pad.l + plotW / 2;
  const cy = pad.t + plotH * 0.78;
  const radius = Math.min(plotW, plotH) * 0.36;
  const start = 135;
  const sweep = 270;
  const value = pts.reduce((sum, p) => sum + (Number(p.val) || 0), 0);
  const span = scale.max - scale.min || 1;
  const frac = Math.min(1, Math.max(0, (value - scale.min) / span));
  const arcPath = (fromDeg: number, toDeg: number) => {
    const [x1, y1] = [
      cx + radius * Math.cos(rad(fromDeg)),
      cy + radius * Math.sin(rad(fromDeg)),
    ];
    const [x2, y2] = [
      cx + radius * Math.cos(rad(toDeg)),
      cy + radius * Math.sin(rad(toDeg)),
    ];
    const large = toDeg - fromDeg > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
  };
  const display = Number(value.toFixed(2));
  return seriesHead(
    sIdx,
    ser,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    <g role="listitem">
      <path
        d={arcPath(start, start + sweep)}
        fill="none"
        stroke="var(--dx-border-color)"
        strokeWidth={14}
        strokeLinecap="round"
      />
      {frac > 0 && (
        <path
          d={arcPath(start, start + sweep * frac)}
          fill="none"
          stroke={color}
          strokeWidth={14}
          strokeLinecap="round"
        />
      )}
      <text x={cx} y={cy - 4} textAnchor="middle" className={styles.gaugeValue}>
        {display}
      </text>
      <path
        d={arcPath(start, start + sweep)}
        fill="none"
        stroke="transparent"
        strokeWidth={22}
        onMouseEnter={() =>
          tooltipVisible &&
          showTip(cx, cy - radius, `${ser.title ?? 'Value'}: ${display}`)
        }
        onMouseLeave={() => hideTip()}
        onClick={() =>
          ctx.handleClick(ser, pts[0]?.cat ?? '', value, pts[0]?.item ?? {})
        }
        style={{ cursor: 'pointer' }}
      />
      {ser.labels?.visible && (
        <text
          x={cx}
          y={cy + radius + 18}
          textAnchor="middle"
          className={styles.dataLabel}
        >
          {ser.title ?? ''}
        </text>
      )}
    </g>
  );
}

function radarGeom(ctx: ChartRenderContext) {
  const { pad, plotW, plotH, categories } = ctx;
  const cx = pad.l + plotW / 2;
  const cy = pad.t + plotH / 2;
  const radius = Math.min(plotW, plotH) / 2 - 24;
  const n = Math.max(3, categories.length);
  const angleFor = (i: number) => rad(-90 + (360 * i) / n);
  const vertexFor = (i: number, ratio: number): [number, number] => {
    const a = angleFor(i);
    return [
      cx + radius * ratio * Math.cos(a),
      cy + radius * ratio * Math.sin(a),
    ];
  };
  return { cx, cy, radius, angleFor, vertexFor };
}

/** Shared radar background (rings + spokes), drawn once per chart so later
 * series groups never paint the grid over earlier series' data. */
export function renderRadarGrid(ctx: ChartRenderContext): ReactNode {
  const { categories } = ctx;
  const { cx, cy, vertexFor } = radarGeom(ctx);
  const rings = [0.25, 0.5, 0.75, 1];
  return (
    <g data-chart-type="radar-grid" aria-hidden="true">
      {rings.map((ratio) => (
        <polygon
          key={ratio}
          points={categories
            .map((_, i) => vertexFor(i, ratio).join(','))
            .join(' ')}
          fill="none"
          stroke="var(--dx-border-color)"
          strokeWidth={1}
        />
      ))}
      {categories.map((cat, i) => {
        const [x, y] = vertexFor(i, 1);
        return (
          <line
            key={cat}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="var(--dx-border-color)"
            strokeWidth={1}
          />
        );
      })}
    </g>
  );
}

function renderRadar(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { categories, tooltipVisible, showTip, hideTip } = ctx;
  const { cx, cy, radius, angleFor, vertexFor } = radarGeom(ctx);
  const top = ctx.scale.max || 1;
  const valueFor = (cat: string) => pts.find((p) => p.cat === cat)?.val ?? 0;
  const polygon = categories
    .map((cat, i) => {
      const ratio = Math.min(1, Math.max(0, valueFor(cat) / top));
      const [x, y] = vertexFor(i, ratio);
      return `${x},${y}`;
    })
    .join(' ');
  return seriesHead(
    sIdx,
    ser,
    <>
      <polygon
        points={polygon}
        fill={color}
        fillOpacity={0.25}
        stroke={color}
        strokeWidth={2}
      />
      {categories.map((cat, i) => {
        const ratio = Math.min(1, Math.max(0, valueFor(cat) / top));
        const [x, y] = vertexFor(i, ratio);
        const [lx, ly] = vertexFor(i, 1);
        return (
          <g key={cat} role="listitem">
            <circle
              cx={x}
              cy={y}
              r={3.5}
              fill={color}
              stroke="var(--dx-surface-color)"
              strokeWidth={1}
            />
            <circle
              cx={x}
              cy={y}
              r={12}
              fill="transparent"
              onMouseEnter={() =>
                tooltipVisible &&
                showTip(lx, ly, `${ser.title ?? cat}: ${valueFor(cat)}`)
              }
              onMouseLeave={() => hideTip()}
              onClick={() => {
                const p = pts.find((pt) => pt.cat === cat);
                if (p) ctx.handleClick(ser, p.cat, p.val, p.item);
              }}
              style={{ cursor: 'pointer' }}
            />
            <text
              x={cx + (radius + 14) * Math.cos(angleFor(i))}
              y={cy + (radius + 14) * Math.sin(angleFor(i)) + 4}
              textAnchor="middle"
              className={styles.tickLabel}
            >
              {cat}
            </text>
          </g>
        );
      })}
    </>
  );
}

function renderFunnel(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, tooltipVisible, showTip, hideTip } = ctx;
  const rows = pts;
  const maxVal = Math.max(1, ...rows.map((p) => Number(p.val) || 0));
  const rowH = plotH / Math.max(1, rows.length);
  const cx = pad.l + plotW / 2;
  return seriesHead(
    sIdx,
    ser,
    rows.map((p, i) => {
      const v = Math.max(0, Number(p.val) || 0);
      const w = (v / maxVal) * plotW;
      const next = rows[i + 1];
      const w2 = next
        ? (Math.max(0, Number(next.val) || 0) / maxVal) * plotW
        : w * 0.7;
      const y = pad.t + i * rowH + 2;
      const h = Math.max(4, rowH - 6);
      const opacity = 1 - i * (0.45 / Math.max(1, rows.length));
      return (
        <g key={i} role="listitem">
          <path
            d={`M ${cx - w / 2} ${y} L ${cx + w / 2} ${y} L ${cx + w2 / 2} ${y + h} L ${cx - w2 / 2} ${y + h} Z`}
            fill={color}
            fillOpacity={opacity}
            stroke="var(--dx-surface-color)"
            strokeWidth={1}
            onMouseEnter={() =>
              tooltipVisible &&
              showTip(cx, y, `${ser.title ?? p.cat}: ${p.val}`)
            }
            onMouseLeave={() => hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
            style={{ cursor: 'pointer' }}
          />
          <text
            x={cx}
            y={y + h / 2 + 4}
            textAnchor="middle"
            className={styles.dataLabel}
          >
            {p.cat} · {p.val}
          </text>
        </g>
      );
    })
  );
}

function renderHeatmap(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, categories, tooltipVisible, showTip, hideTip } =
    ctx;
  const rowKeys: string[] = [];
  ser.data.forEach((d) => {
    const key = ser.rowProperty ? String(d[ser.rowProperty] ?? '') : 'All';
    if (!rowKeys.includes(key)) rowKeys.push(key);
  });
  const values = pts.map((p) => p.val).filter((v) => Number.isFinite(v));
  const vmin = values.length ? Math.min(...values) : 0;
  const vmax = values.length ? Math.max(...values) : 1;
  const colW = plotW / Math.max(1, categories.length);
  const rowH = plotH / Math.max(1, rowKeys.length);
  const opacityFor = (v: number) => {
    if (vmax === vmin) return 0.6;
    return 0.15 + 0.85 * ((v - vmin) / (vmax - vmin));
  };
  return seriesHead(
    sIdx,
    ser,
    <>
      {rowKeys.map((key, r) => (
        <text
          key={key}
          x={pad.l - 8}
          y={pad.t + r * rowH + rowH / 2 + 4}
          textAnchor="end"
          className={styles.tickLabel}
        >
          {key}
        </text>
      ))}
      {pts.map((p, i) => {
        const d = ser.data[i];
        const col = categories.indexOf(p.cat);
        const row = rowKeys.indexOf(
          ser.rowProperty && d ? String(d[ser.rowProperty] ?? '') : 'All'
        );
        if (col < 0 || row < 0) return null;
        const x = pad.l + col * colW;
        const y = pad.t + row * rowH;
        return (
          <g key={i} role="listitem">
            <rect
              x={x + 1}
              y={y + 1}
              width={Math.max(1, colW - 2)}
              height={Math.max(1, rowH - 2)}
              fill={color}
              fillOpacity={opacityFor(p.val)}
              onMouseEnter={() =>
                tooltipVisible &&
                showTip(x + colW / 2, y, `${ser.title ?? p.cat}: ${p.val}`)
              }
              onMouseLeave={() => hideTip()}
              onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
              style={{ cursor: 'pointer' }}
            />
            {ser.labels?.visible && (
              <text
                x={x + colW / 2}
                y={y + rowH / 2 + 4}
                textAnchor="middle"
                className={styles.dataLabel}
              >
                {p.val}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

/**
 * OHLC family (uikit#95): candlestick bodies (filled when rising, hollow
 * when falling), ohlc open/close ticks, highlow range lines. Points
 * without a complete OHLC quad fall back to the close/value marker.
 */
function renderOhlc(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { xFor, yFor, categories } = ctx;
  const cIdxMap = new Map(categories.map((c, i) => [c, i] as const));
  const groupW = ctx.plotW / Math.max(1, categories.length);
  const bodyW = Math.max(8, Math.min(28, groupW / 2 - 4));
  const up = ser.upColor ?? color;
  const down = ser.downColor ?? 'var(--dx-danger-color)';
  return seriesHead(
    sIdx,
    ser,
    pts.map((p, i) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      const x = xFor(ci);
      const close = p.close ?? p.val;
      const hasQuad =
        typeof p.open === 'number' &&
        !Number.isNaN(p.open) &&
        typeof p.high === 'number' &&
        !Number.isNaN(p.high) &&
        typeof p.low === 'number' &&
        !Number.isNaN(p.low) &&
        typeof close === 'number' &&
        !Number.isNaN(close);
      const rising = hasQuad && close >= (p.open as number);
      const tip = `${ser.title ?? p.cat}: O ${p.open ?? '–'} H ${p.high ?? '–'} L ${p.low ?? '–'} C ${close}`;
      return (
        <g key={i} role="listitem">
          {hasQuad && ser.type === 'candlestick' && (
            <>
              <line
                x1={x}
                y1={yFor(p.high as number)}
                x2={x}
                y2={yFor(p.low as number)}
                stroke={rising ? up : down}
                strokeWidth={1.5}
              />
              <rect
                x={x - bodyW / 2}
                y={yFor(Math.max(p.open as number, close))}
                width={bodyW}
                height={Math.max(
                  2,
                  yFor(Math.min(p.open as number, close)) -
                    yFor(Math.max(p.open as number, close))
                )}
                fill={rising ? up : 'none'}
                stroke={rising ? up : down}
                strokeWidth={1.5}
              />
            </>
          )}
          {hasQuad && ser.type === 'ohlc' && (
            <>
              <line
                x1={x}
                y1={yFor(p.high as number)}
                x2={x}
                y2={yFor(p.low as number)}
                stroke={color}
                strokeWidth={1.5}
              />
              <line
                x1={x - bodyW / 2}
                y1={yFor(p.open as number)}
                x2={x}
                y2={yFor(p.open as number)}
                stroke={color}
                strokeWidth={1.5}
              />
              <line
                x1={x}
                y1={yFor(close)}
                x2={x + bodyW / 2}
                y2={yFor(close)}
                stroke={color}
                strokeWidth={1.5}
              />
            </>
          )}
          {hasQuad && ser.type === 'highlow' && (
            <line
              x1={x}
              y1={yFor(p.high as number)}
              x2={x}
              y2={yFor(p.low as number)}
              stroke={color}
              strokeWidth={2}
            />
          )}
          {!hasQuad && renderMarker(x, yFor(close), color, ser, 4)}
          <rect
            x={x - 14}
            y={yFor(close) - 14}
            width={28}
            height={28}
            fill="transparent"
            onMouseEnter={() =>
              ctx.tooltipVisible && ctx.showTip(x, yFor(close), tip)
            }
            onMouseLeave={() => ctx.hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, close, p.item)}
            style={{ cursor: 'pointer' }}
          />
          {ser.labels?.visible && (
            <text
              x={x}
              y={yFor(close) - 8}
              textAnchor="middle"
              className={styles.dataLabel}
            >
              {fmtVal(ctx, close)}
            </text>
          )}
        </g>
      );
    })
  );
}

interface TreemapLeaf {
  cat: string;
  val: number;
  item: Record<string, unknown>;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Squarified treemap tiling (uikit#95): lays out value-weighted
 * rectangles with near-square aspects. Children tile inside their
 * parent's rect, recursively.
 */
function squarify(
  entries: Array<{ val: number }>,
  x: number,
  y: number,
  w: number,
  h: number
): Array<{ x: number; y: number; w: number; h: number }> {
  const total = entries.reduce((a, e) => a + Math.max(0, e.val), 0);
  if (entries.length === 0 || total <= 0 || w <= 0 || h <= 0)
    return entries.map(() => ({ x, y, w: 0, h: 0 }));
  const scale = (w * h) / total;
  const out: Array<{ x: number; y: number; w: number; h: number }> = [];
  const rest = entries.map((e, i) => ({ ...e, i }));
  let cx = x;
  let cy = y;
  let cw = w;
  let ch = h;
  const worst = (row: Array<{ val: number }>, side: number): number => {
    const sum = row.reduce((a, e) => a + Math.max(0, e.val), 0) * scale;
    if (sum <= 0) return Number.POSITIVE_INFINITY;
    const mx = Math.max(...row.map((e) => Math.max(0, e.val))) * scale;
    const mn = Math.min(...row.map((e) => Math.max(0, e.val))) * scale;
    return Math.max(
      (side * side * mx) / (sum * sum),
      (sum * sum) / (side * side * (mn || 1e-9))
    );
  };
  while (rest.length > 0) {
    const side = Math.min(cw, ch);
    const row: Array<{ val: number; i: number }> = [];
    let best = Number.POSITIVE_INFINITY;
    while (rest.length > 0) {
      const candidate = [...row, rest[0]!];
      const score = worst(candidate, side);
      if (score <= best) {
        best = score;
        row.push(rest.shift()!);
      } else break;
    }
    if (row.length === 0) row.push(rest.shift()!);
    const rowSum = row.reduce((a, e) => a + Math.max(0, e.val), 0) * scale;
    if (cw >= ch) {
      const rowW = rowSum / ch;
      let ry = cy;
      for (const e of row) {
        const eh = (Math.max(0, e.val) * scale) / rowW;
        out[e.i] = { x: cx, y: ry, w: rowW, h: eh };
        ry += eh;
      }
      cx += rowW;
      cw -= rowW;
    } else {
      const rowH = rowSum / cw;
      let rx = cx;
      for (const e of row) {
        const ew = (Math.max(0, e.val) * scale) / rowH;
        out[e.i] = { x: rx, y: cy, w: ew, h: rowH };
        rx += ew;
      }
      cy += rowH;
      ch -= rowH;
    }
  }
  return out;
}

function treemapLeaves(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  x: number,
  y: number,
  w: number,
  h: number,
  data: Array<Record<string, unknown>>,
  depth: number,
  counter: { n: number },
  out: TreemapLeaf[]
): void {
  const colorFor = ctx.colorFor;
  const items = data.map((d) => ({
    cat: String(d[ser.categoryProperty] ?? ''),
    val: Number(d[ser.valueProperty]),
    item: d,
  }));
  const rects = squarify(items, x, y, w, h);
  const kidsProp = ser.childrenProperty ?? 'children';
  items.forEach((it, i) => {
    const r = rects[i]!;
    const raw = data[i]?.[kidsProp];
    const kids = Array.isArray(raw) ? raw : [];
    if (kids.length > 0 && depth < 8) {
      treemapLeaves(
        ctx,
        ser,
        sIdx,
        r.x,
        r.y,
        r.w,
        r.h,
        kids,
        depth + 1,
        counter,
        out
      );
      return;
    }
    const n = counter.n++;
    out.push({
      ...it,
      color: colorFor(sIdx + n, ser),
      x: r.x,
      y: r.y,
      w: r.w,
      h: r.h,
    });
  });
}

function renderTreemap(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, tooltipVisible, showTip, hideTip } = ctx;
  void pts;
  void color;
  const counter = { n: 0 };
  const leaves: TreemapLeaf[] = [];
  treemapLeaves(
    ctx,
    ser,
    sIdx,
    pad.l,
    pad.t,
    plotW,
    plotH,
    ser.data,
    0,
    counter,
    leaves
  );
  return seriesHead(
    sIdx,
    ser,
    leaves.map((leaf, i) => (
      <g key={i} role="listitem">
        <rect
          x={leaf.x}
          y={leaf.y}
          width={Math.max(0, leaf.w)}
          height={Math.max(0, leaf.h)}
          fill={leaf.color}
          stroke="var(--dx-surface-color)"
          strokeWidth={1}
          onMouseEnter={() =>
            tooltipVisible &&
            showTip(
              leaf.x + leaf.w / 2,
              leaf.y,
              `${ser.title ?? leaf.cat}: ${leaf.val}`
            )
          }
          onMouseLeave={() => hideTip()}
          onClick={() => ctx.handleClick(ser, leaf.cat, leaf.val, leaf.item)}
          style={{ cursor: 'pointer' }}
        />
        {leaf.w > 28 && leaf.h > 18 && (
          <text
            x={leaf.x + leaf.w / 2}
            y={leaf.y + leaf.h / 2 + 4}
            textAnchor="middle"
            className={styles.dataLabel}
          >
            {leaf.cat}
          </text>
        )}
      </g>
    ))
  );
}

/**
 * Pyramid (uikit#95): funnel geometry inverted — segments widen
 * downward instead of narrowing. Shares the funnel's tooltip/click/
 * label contract.
 */
function renderPyramid(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { pad, plotW, plotH, tooltipVisible, showTip, hideTip } = ctx;
  const rows = pts;
  const maxVal = Math.max(1, ...rows.map((p) => Math.max(0, p.val)));
  const rowH = plotH / Math.max(1, rows.length);
  const cx = pad.l + plotW / 2;
  return seriesHead(
    sIdx,
    ser,
    rows.map((p, i) => {
      const v = Math.max(0, p.val);
      // Stepped pyramid: each segment spans its own width up top and the
      // next segment's width below, so ascending data (small on top)
      // widens toward the base. The last row keeps its own width (no
      // funnel-style shrink).
      const wTop = (v / maxVal) * plotW;
      const next = rows[i + 1];
      const wBottom = next ? (Math.max(0, next.val) / maxVal) * plotW : wTop;
      const y = pad.t + i * rowH + 2;
      const h = Math.max(4, rowH - 6);
      return (
        <g key={i} role="listitem">
          <path
            d={`M ${cx - wTop / 2} ${y} L ${cx + wTop / 2} ${y} L ${cx + wBottom / 2} ${y + h} L ${cx - wBottom / 2} ${y + h} Z`}
            fill={color}
            fillOpacity={0.9}
            stroke="var(--dx-surface-color)"
            strokeWidth={1}
            onMouseEnter={() =>
              tooltipVisible &&
              showTip(cx, y, `${ser.title ?? p.cat}: ${p.val}`)
            }
            onMouseLeave={() => hideTip()}
            onClick={() => ctx.handleClick(ser, p.cat, p.val, p.item)}
            style={{ cursor: 'pointer' }}
          />
          <text
            x={cx}
            y={y + h / 2 + 4}
            textAnchor="middle"
            className={styles.dataLabel}
          >
            {p.cat} · {p.val}
          </text>
        </g>
      );
    })
  );
}

/**
 * Spider (uikit#95): radar geometry with per-category (per-spoke)
 * scaling instead of the shared value scale — each spoke normalizes to
 * its own maximum across spider series, so mixed-magnitude series stay
 * comparable. Reuses the radar web grid; polygon, markers, labels,
 * tooltips, and clicks follow the line-series contract.
 */
function renderSpider(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { categories, tooltipVisible, showTip, hideTip, series } = ctx;
  const { vertexFor } = radarGeom(ctx);
  const topFor = (cat: string): number => {
    let top = 0;
    for (const other of series) {
      if (other.type !== 'spider') continue;
      for (const d of other.data) {
        if (String(d[other.categoryProperty] ?? '') === cat) {
          const v = Number(d[other.valueProperty]);
          if (!Number.isNaN(v)) top = Math.max(top, v);
        }
      }
    }
    return top || 1;
  };
  const valueFor = (cat: string) => pts.find((p) => p.cat === cat)?.val ?? 0;
  const polygon = categories
    .map((cat, i) => {
      const ratio = Math.min(1, Math.max(0, valueFor(cat) / topFor(cat)));
      const [x, y] = vertexFor(i, ratio);
      return `${x},${y}`;
    })
    .join(' ');
  return seriesHead(
    sIdx,
    ser,
    <>
      <polygon
        points={polygon}
        fill={color}
        fillOpacity={0.25}
        stroke={color}
        strokeWidth={ser.lineWidth ?? 2}
        strokeDasharray={dashAttr(ser.dash)}
      />
      {categories.map((cat, i) => {
        const ratio = Math.min(1, Math.max(0, valueFor(cat) / topFor(cat)));
        const [x, y] = vertexFor(i, ratio);
        const [lx, ly] = vertexFor(i, 1);
        return (
          <g key={cat} role="listitem">
            {renderMarker(x, y, color, ser, 3.5)}
            <circle
              cx={x}
              cy={y}
              r={12}
              fill="transparent"
              onMouseEnter={() =>
                tooltipVisible &&
                showTip(lx, ly, `${ser.title ?? cat}: ${valueFor(cat)}`)
              }
              onMouseLeave={() => hideTip()}
              onClick={() => {
                const p = pts.find((pt) => pt.cat === cat);
                if (p) ctx.handleClick(ser, p.cat, p.val, p.item);
              }}
              style={{ cursor: 'pointer' }}
            />
            {ser.labels?.visible && (
              <text
                x={lx}
                y={ly + 16}
                textAnchor="middle"
                className={styles.dataLabel}
              >
                {valueFor(cat)}
              </text>
            )}
            <text
              x={lx}
              y={ly + 4}
              textAnchor="middle"
              className={styles.tickLabel}
            >
              {cat}
            </text>
          </g>
        );
      })}
    </>
  );
}

interface SankeyNode {
  id: string;
  depth: number;
  total: number;
  x: number;
  w: number;
  y: number;
  h: number;
  color: string;
}

interface SankeyLink {
  source: SankeyNode;
  target: SankeyNode;
  value: number;
  y0: number;
  y1: number;
  h: number;
}

/**
 * Sankey flow diagram (uikit#95): nodes laid in depth columns, links as
 * proportional ribbons. Node height is max(inflow, outflow); links stack
 * inside their endpoints. Self-links and non-positive flows are skipped.
 */
function sankeyLayout(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number
): { nodes: SankeyNode[]; links: SankeyLink[] } {
  const { pad, plotW, plotH } = ctx;
  const srcProp = ser.sourceProperty ?? 'source';
  const tgtProp = ser.targetProperty ?? 'target';
  const rows = ser.data
    .map((d) => ({
      source: String(d[srcProp] ?? ''),
      target: String(d[tgtProp] ?? ''),
      value: Number(d[ser.valueProperty]),
      item: d,
    }))
    .filter(
      (r) => r.source && r.target && r.source !== r.target && r.value > 0
    );
  const ids: string[] = [];
  for (const r of rows) {
    if (!ids.includes(r.source)) ids.push(r.source);
    if (!ids.includes(r.target)) ids.push(r.target);
  }
  // Depth by longest path from a source (cycle-guarded).
  const incoming = new Map<string, string[]>();
  for (const r of rows) {
    if (!incoming.has(r.target)) incoming.set(r.target, []);
    incoming.get(r.target)!.push(r.source);
  }
  const depthCache = new Map<string, number>();
  const depthOf = (id: string, seen: Set<string>): number => {
    if (depthCache.has(id)) return depthCache.get(id)!;
    if (seen.has(id)) return 0;
    seen.add(id);
    const preds = incoming.get(id) ?? [];
    const d =
      preds.length === 0
        ? 0
        : 1 + Math.max(...preds.map((p) => depthOf(p, seen)));
    seen.delete(id);
    depthCache.set(id, d);
    return d;
  };
  const depths = new Map<string, number>();
  for (const id of ids) depths.set(id, depthOf(id, new Set()));
  const maxDepth = Math.max(0, ...depths.values());
  const nodeW = Math.max(
    12,
    Math.min(28, plotW / Math.max(1, (maxDepth + 1) * 8))
  );
  const gap = 10;
  const inflow = new Map<string, number>();
  const outflow = new Map<string, number>();
  for (const r of rows) {
    outflow.set(r.source, (outflow.get(r.source) ?? 0) + r.value);
    inflow.set(r.target, (inflow.get(r.target) ?? 0) + r.value);
  }
  const totalOf = (id: string) =>
    Math.max(inflow.get(id) ?? 0, outflow.get(id) ?? 0);
  const colTotal = new Map<number, number>();
  for (const id of ids) {
    const d = depths.get(id)!;
    colTotal.set(d, (colTotal.get(d) ?? 0) + totalOf(id));
  }
  const peak = Math.max(1, ...colTotal.values());
  const scale = (plotH - gap * Math.max(0, ids.length - 1)) / peak;
  const xForDepth = (d: number) =>
    maxDepth === 0 ? pad.l : pad.l + (d / maxDepth) * (plotW - nodeW);
  const nodes: SankeyNode[] = [];
  const byId = new Map<string, SankeyNode>();
  const columns = new Map<number, string[]>();
  for (const id of ids) {
    const d = depths.get(id)!;
    if (!columns.has(d)) columns.set(d, []);
    columns.get(d)!.push(id);
  }
  for (const [d, members] of [...columns.entries()].sort(
    (a, b) => a[0] - b[0]
  )) {
    let y = pad.t;
    for (const id of members) {
      const h = Math.max(4, totalOf(id) * scale);
      const node: SankeyNode = {
        id,
        depth: d,
        total: totalOf(id),
        x: xForDepth(d),
        w: nodeW,
        y,
        h,
        color: ctx.colorFor(sIdx + nodes.length, ser),
      };
      nodes.push(node);
      byId.set(id, node);
      y += h + gap;
    }
  }
  // Link offsets stack inside each endpoint proportionally.
  const outCursor = new Map<string, number>();
  const inCursor = new Map<string, number>();
  const links: SankeyLink[] = [];
  for (const r of rows) {
    const source = byId.get(r.source)!;
    const target = byId.get(r.target)!;
    const h = Math.max(1, r.value * scale);
    const y0 = source.y + (outCursor.get(r.source) ?? 0);
    const y1 = target.y + (inCursor.get(r.target) ?? 0);
    outCursor.set(r.source, (outCursor.get(r.source) ?? 0) + h);
    inCursor.set(r.target, (inCursor.get(r.target) ?? 0) + h);
    links.push({ source, target, value: r.value, y0, y1, h });
  }
  return { nodes, links };
}

function sankeyRibbon(link: SankeyLink): string {
  const x0 = link.source.x + link.source.w;
  const x1 = link.target.x;
  const mx = (x0 + x1) / 2;
  return (
    `M ${x0} ${link.y0} C ${mx} ${link.y0}, ${mx} ${link.y1}, ${x1} ${link.y1} ` +
    `L ${x1} ${link.y1 + link.h} C ${mx} ${link.y1 + link.h}, ${mx} ${link.y0 + link.h}, ${x0} ${link.y0 + link.h} Z`
  );
}

function renderSankey(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number,
  pts: ChartPoint[],
  color: string
): ReactNode {
  const { tooltipVisible, showTip, hideTip } = ctx;
  void pts;
  void color;
  const { nodes, links } = sankeyLayout(ctx, ser, sIdx);
  return seriesHead(
    sIdx,
    ser,
    <>
      {links.map((link, i) => (
        <path
          key={`link-${i}`}
          d={sankeyRibbon(link)}
          fill={link.source.color}
          fillOpacity={0.45}
          stroke="none"
          onMouseEnter={() =>
            tooltipVisible &&
            showTip(
              (link.source.x + link.source.w + link.target.x) / 2,
              (link.y0 + link.y1) / 2,
              `${link.source.id} → ${link.target.id}: ${link.value}`
            )
          }
          onMouseLeave={() => hideTip()}
          onClick={() =>
            ctx.handleClick(
              ser,
              `${link.source.id} → ${link.target.id}`,
              link.value,
              {
                source: link.source.id,
                target: link.target.id,
                value: link.value,
              }
            )
          }
          style={{ cursor: 'pointer' }}
        />
      ))}
      {nodes.map((node) => (
        <g key={node.id} role="listitem">
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={node.color}
            onMouseEnter={() =>
              tooltipVisible &&
              showTip(node.x + node.w / 2, node.y, `${node.id}: ${node.total}`)
            }
            onMouseLeave={() => hideTip()}
            onClick={() =>
              ctx.handleClick(ser, node.id, node.total, { id: node.id })
            }
            style={{ cursor: 'pointer' }}
          />
          <text
            x={node.depth === 0 ? node.x - 6 : node.x + node.w + 6}
            y={node.y + node.h / 2 + 4}
            textAnchor={node.depth === 0 ? 'end' : 'start'}
            className={styles.dataLabel}
          >
            {node.id}
          </text>
        </g>
      ))}
    </>
  );
}

export function renderSeries(
  ctx: ChartRenderContext,
  ser: ChartSeries,
  sIdx: number
): ReactNode {
  const pts = pointsFor(ser);
  const color = ctx.colorFor(sIdx, ser);
  switch (ser.type) {
    case 'pie':
    case 'donut':
      return renderPie(ctx, ser, sIdx, pts, color);
    case 'scatter':
    case 'bubble':
      return renderPoints(ctx, ser, sIdx, pts, color);
    case 'line':
    case 'area':
      return renderLine(ctx, ser, sIdx, pts, color);
    case 'gauge':
      return renderGauge(ctx, ser, sIdx, pts, color);
    case 'radar':
      return renderRadar(ctx, ser, sIdx, pts, color);
    case 'funnel':
      return renderFunnel(ctx, ser, sIdx, pts, color);
    case 'heatmap':
      return renderHeatmap(ctx, ser, sIdx, pts, color);
    case 'candlestick':
    case 'ohlc':
    case 'highlow':
      return renderOhlc(ctx, ser, sIdx, pts, color);
    case 'trendline':
    case 'movingaverage':
      return renderDerived(ctx, ser, sIdx, color);
    case 'treemap':
      return renderTreemap(ctx, ser, sIdx, pts, color);
    case 'pyramid':
      return renderPyramid(ctx, ser, sIdx, pts, color);
    case 'spider':
      return renderSpider(ctx, ser, sIdx, pts, color);
    case 'sankey':
      return renderSankey(ctx, ser, sIdx, pts, color);
    default:
      return renderBars(ctx, ser, sIdx, pts, color);
  }
}
