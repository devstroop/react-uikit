import styles from './Gauges.module.css';

export interface ArcColorStop {
  /** Fraction along the arc, 0..1. */
  offset: number;
  color: string;
}

export interface ArcGaugeProps {
  value: number;
  min?: number;
  max?: number;
  /** Arc stroke width. Defaults to 16. */
  arcWidth?: number;
  /** Value arc color when no stops match. Defaults to the primary token. */
  color?: string;
  /**
   * Stepped color stops: the value arc takes the color of the last stop
   * whose offset is at or below the value fraction.
   */
  colorStops?: ArcColorStop[];
  /** Diameter in px. Defaults to 200. */
  size?: number;
  /** Show the value label. Defaults to true. */
  showValue?: boolean;
  /** Format the value label. Defaults to String(value). */
  formatValue?: (value: number) => string;
  ariaLabel?: string;
  className?: string;
}

const START_DEG = 150;
const SWEEP_DEG = 240;

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

function stopColor(
  fraction: number,
  stops: ArcColorStop[] | undefined,
  fallback: string
): string {
  if (!stops || stops.length === 0) return fallback;
  let color = fallback;
  for (const stop of stops) {
    if (fraction >= stop.offset) color = stop.color;
  }
  return color;
}

/**
 * Arc gauge (uikit#97): 240° value arc with stepped color stops and a
 * value label. Meter semantics throughout.
 */
export function ArcGauge({
  value,
  min = 0,
  max = 100,
  arcWidth = 16,
  color,
  colorStops,
  size = 200,
  showValue = true,
  formatValue = (v: number) => String(Math.round(v * 100) / 100),
  ariaLabel = 'Gauge',
  className,
}: ArcGaugeProps) {
  const span = max - min || 1;
  const fraction = Math.max(0, Math.min(1, (value - min) / span));
  const trackColor = 'var(--dx-border-color)';
  const valueColor = color ?? 'var(--dx-primary-color)';
  const cx = 100;
  const cy = 96;
  const radius = 80;
  const endDeg = START_DEG + SWEEP_DEG * fraction;
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
      <svg viewBox="0 0 200 130" width="100%" aria-hidden="true">
        <path
          d={arcPath(cx, cy, radius, START_DEG, START_DEG + SWEEP_DEG)}
          fill="none"
          stroke={trackColor}
          strokeWidth={arcWidth}
          strokeLinecap="round"
        />
        {fraction > 0 && (
          <path
            d={arcPath(cx, cy, radius, START_DEG, endDeg)}
            fill="none"
            stroke={stopColor(fraction, colorStops, valueColor)}
            strokeWidth={arcWidth}
            strokeLinecap="round"
          />
        )}
      </svg>
      {showValue && <div className={styles.value}>{formatValue(value)}</div>}
    </div>
  );
}
