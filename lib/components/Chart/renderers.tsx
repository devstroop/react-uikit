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
    .map((p) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      const base = baseFor(p.cat);
      return `${ci === 0 ? 'M' : 'L'} ${xFor(ci)} ${yFor(base + p.val)}`;
    })
    .join(' ');
  const baseD = pts
    .map((p) => {
      const ci = cIdxMap.get(p.cat) ?? 0;
      const base = baseFor(p.cat);
      return `${ci === 0 ? 'M' : 'L'} ${xFor(ci)} ${yFor(base)}`;
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
    default:
      return renderBars(ctx, ser, sIdx, pts, color);
  }
}
