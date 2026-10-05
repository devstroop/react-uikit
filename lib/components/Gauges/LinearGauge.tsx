import styles from './Gauges.module.css';

export interface LinearGaugeRange {
  from: number;
  to: number;
  color: string;
}

export interface LinearGaugeProps {
  value: number;
  min?: number;
  max?: number;
  orientation?: 'horizontal' | 'vertical';
  /** Scale ticks + labels. Defaults to 5 ticks shown. */
  ticks?: { count?: number; showLabels?: boolean };
  /** Background range bands drawn under the fill. */
  ranges?: LinearGaugeRange[];
  /** Fill color. Defaults to the primary token. */
  color?: string;
  /** Length in px along the main axis. Defaults to 280 (horizontal) / 220 (vertical). */
  length?: number;
  /** Thickness in px across the axis. Defaults to 20. */
  thickness?: number;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  ariaLabel?: string;
  className?: string;
}

function tickValues(min: number, max: number, count: number): number[] {
  if (count <= 1) return [min];
  return Array.from(
    { length: count },
    (_, i) => min + ((max - min) * i) / (count - 1)
  );
}

/**
 * Linear gauge (uikit#97): horizontal/vertical scale with ticks, range
 * bands, value fill + pointer, and a value label. Meter semantics.
 */
export function LinearGauge({
  value,
  min = 0,
  max = 100,
  orientation = 'horizontal',
  ticks = {},
  ranges = [],
  color,
  length,
  thickness = 20,
  showValue = true,
  formatValue = (v: number) => String(Math.round(v * 100) / 100),
  ariaLabel = 'Gauge',
  className,
}: LinearGaugeProps) {
  const span = max - min || 1;
  const vertical = orientation === 'vertical';
  const main = length ?? (vertical ? 220 : 280);
  const { count = 5, showLabels = true } = ticks;
  const fill = color ?? 'var(--dx-primary-color)';
  const track = 'var(--dx-border-color)';
  // Plot area inside the tick labels: leave headroom on both ends.
  // Horizontal grows left→right; vertical grows bottom→top.
  const pad = 8;
  const pos = (v: number) => {
    const clamped = Math.max(min, Math.min(max, v));
    const frac = (clamped - min) / span;
    return vertical
      ? main - pad - frac * (main - pad * 2)
      : pad + frac * (main - pad * 2);
  };

  const renderTicks = () => {
    if (count <= 0) return null;
    return tickValues(min, max, count).map((t, i) => {
      const p = pos(t);
      return (
        <g key={i}>
          {vertical ? (
            <line
              x1={-6}
              y1={p}
              x2={0}
              y2={p}
              stroke={track}
              strokeWidth={1.5}
            />
          ) : (
            <line
              x1={p}
              y1={-6}
              x2={p}
              y2={0}
              stroke={track}
              strokeWidth={1.5}
            />
          )}
          {showLabels &&
            (vertical ? (
              <text x={-10} y={p + 4} textAnchor="end" className={styles.tick}>
                {t}
              </text>
            ) : (
              <text x={p} y={-10} textAnchor="middle" className={styles.tick}>
                {t}
              </text>
            ))}
        </g>
      );
    });
  };

  const renderRanges = () =>
    ranges.map((r, i) => {
      const a = pos(r.from);
      const b = pos(r.to);
      const lo = Math.min(a, b);
      const len = Math.abs(b - a);
      return vertical ? (
        <rect
          key={i}
          x={-thickness / 2}
          y={lo}
          width={thickness}
          height={len}
          fill={r.color}
          opacity={0.35}
        />
      ) : (
        <rect
          key={i}
          x={lo}
          y={-thickness / 2}
          width={len}
          height={thickness}
          fill={r.color}
          opacity={0.35}
        />
      );
    });

  const valuePos = pos(value);
  const body = (
    <g>
      {renderRanges()}
      {/* track */}
      {vertical ? (
        <rect
          x={-thickness / 2}
          y={pad}
          width={thickness}
          height={main - pad * 2}
          rx={thickness / 2}
          fill="none"
          stroke={track}
          strokeWidth={2}
        />
      ) : (
        <rect
          x={pad}
          y={-thickness / 2}
          width={main - pad * 2}
          height={thickness}
          rx={thickness / 2}
          fill="none"
          stroke={track}
          strokeWidth={2}
        />
      )}
      {/* value fill from min edge */}
      {vertical ? (
        <rect
          x={-thickness / 2}
          y={valuePos}
          width={thickness}
          height={main - pad - valuePos}
          rx={thickness / 2}
          fill={fill}
        />
      ) : (
        <rect
          x={pad}
          y={-thickness / 2}
          width={Math.max(0, valuePos - pad)}
          height={thickness}
          rx={thickness / 2}
          fill={fill}
        />
      )}
      {/* pointer triangle at the value */}
      {vertical ? (
        <path
          d={`M ${-thickness / 2 - 10} ${valuePos} L ${-thickness / 2 - 2} ${valuePos - 5} L ${-thickness / 2 - 2} ${valuePos + 5} Z`}
          fill={fill}
        />
      ) : (
        <path
          d={`M ${valuePos} ${-thickness / 2 - 10} L ${valuePos - 5} ${-thickness / 2 - 2} L ${valuePos + 5} ${-thickness / 2 - 2} Z`}
          fill={fill}
        />
      )}
      {renderTicks()}
    </g>
  );

  return (
    <div
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      className={[styles.gauge, className].filter(Boolean).join(' ')}
    >
      {vertical ? (
        <svg
          width={thickness + 64}
          height={main + 8}
          viewBox={`${-thickness / 2 - 56} -16 ${thickness + 64} ${main + 24}`}
          aria-hidden="true"
        >
          {body}
        </svg>
      ) : (
        <svg
          width={main}
          height={thickness + 48}
          viewBox={`0 -24 ${main} ${thickness + 56}`}
          aria-hidden="true"
        >
          {body}
        </svg>
      )}
      {showValue && <div className={styles.value}>{formatValue(value)}</div>}
    </div>
  );
}
