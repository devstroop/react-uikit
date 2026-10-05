import styles from './Gauges.module.css';

export interface RadialGaugeRange {
  from: number;
  to: number;
  color: string;
}

export interface RadialGaugePointer {
  value: number;
  color?: string;
}

export interface RadialGaugeProps {
  value: number;
  min?: number;
  max?: number;
  /** Start angle in degrees, 0 = top, clockwise. Defaults to 0. */
  startAngle?: number;
  /** End angle in degrees. Defaults to 360 (full circle). */
  endAngle?: number;
  /** Scale ticks + labels. Defaults to 8 ticks shown. */
  ticks?: { count?: number; showLabels?: boolean };
  /** Colored arc bands. */
  ranges?: RadialGaugeRange[];
  /** Extra needles beyond the value needle. */
  pointers?: RadialGaugePointer[];
  /** Needle/value color. Defaults to the primary token. */
  color?: string;
  /** Diameter in px. Defaults to 200. */
  size?: number;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  ariaLabel?: string;
  className?: string;
}

function polar(
  cx: number,
  cy: number,
  radius: number,
  deg: number
): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
}

function arcPath(
  cx: number,
  cy: number,
  radius: number,
  fromDeg: number,
  toDeg: number
): string {
  const [x1, y1] = polar(cx, cy, radius, fromDeg);
  const [x2, y2] = polar(cx, cy, radius, toDeg);
  const large = toDeg - fromDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
}

function tickValues(min: number, max: number, count: number): number[] {
  if (count <= 1) return [min];
  return Array.from(
    { length: count },
    (_, i) => min + ((max - min) * i) / (count - 1)
  );
}

/**
 * Radial gauge (uikit#97): circular scale with ticks, range bands, needle
 * pointer(s), and a value label. Meter semantics throughout.
 */
export function RadialGauge({
  value,
  min = 0,
  max = 100,
  startAngle = 0,
  endAngle = 360,
  ticks = {},
  ranges = [],
  pointers = [],
  color,
  size = 200,
  showValue = true,
  formatValue = (v: number) => String(Math.round(v * 100) / 100),
  ariaLabel = 'Gauge',
  className,
}: RadialGaugeProps) {
  const span = max - min || 1;
  const frac = (v: number) => Math.max(0, Math.min(1, (v - min) / span));
  const sweep = endAngle - startAngle;
  // A 360° single-arc command can collapse (start == end point);
  // stop a hair short so full circles still paint.
  const paintEnd = sweep >= 360 ? startAngle + 359.999 : endAngle;
  const angleFor = (v: number) =>
    startAngle + (paintEnd - startAngle) * frac(v);
  const needle = color ?? 'var(--dx-primary-color)';
  const track = 'var(--dx-border-color)';
  const { count = 8, showLabels = true } = ticks;
  const cx = 100;
  const cy = 100;
  const radius = 78;

  const renderNeedle = (
    v: number,
    needleColor: string,
    key: string | number
  ) => {
    const [x, y] = polar(cx, cy, radius - 14, angleFor(v));
    return (
      <g key={key}>
        <line
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke={needleColor}
          strokeWidth={4}
          strokeLinecap="round"
        />
      </g>
    );
  };

  return (
    <div
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      className={[styles.gauge, className].filter(Boolean).join(' ')}
      style={{ width: size }}
    >
      <svg viewBox="0 0 200 200" width="100%" aria-hidden="true">
        {/* track */}
        <path
          d={arcPath(cx, cy, radius, startAngle, paintEnd)}
          fill="none"
          stroke={track}
          strokeWidth={12}
          strokeLinecap="round"
        />
        {/* range bands */}
        {ranges.map((r, i) => (
          <path
            key={`range-${i}`}
            d={arcPath(
              cx,
              cy,
              radius,
              angleFor(Math.max(min, r.from)),
              angleFor(Math.min(max, r.to))
            )}
            fill="none"
            stroke={r.color}
            strokeWidth={12}
          />
        ))}
        {/* ticks */}
        {count > 0 &&
          tickValues(min, max, count).map((t, i) => {
            const [x1, y1] = polar(cx, cy, radius - 10, angleFor(t));
            const [x2, y2] = polar(cx, cy, radius - 16, angleFor(t));
            const [lx, ly] = polar(cx, cy, radius - 26, angleFor(t));
            return (
              <g key={i}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={track}
                  strokeWidth={1.5}
                />
                {showLabels && (
                  <text
                    x={lx}
                    y={ly + 4}
                    textAnchor="middle"
                    className={styles.tick}
                  >
                    {t}
                  </text>
                )}
              </g>
            );
          })}
        {/* value needle + extras */}
        {renderNeedle(value, needle, 'value')}
        {pointers.map((p, i) =>
          renderNeedle(p.value, p.color ?? needle, `extra-${i}`)
        )}
        <circle cx={cx} cy={cy} r={7} fill={needle} />
      </svg>
      {showValue && <div className={styles.value}>{formatValue(value)}</div>}
    </div>
  );
}
