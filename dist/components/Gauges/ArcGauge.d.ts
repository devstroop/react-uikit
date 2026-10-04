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
/**
 * Arc gauge (uikit#97): 240° value arc with stepped color stops and a
 * value label. Meter semantics throughout.
 */
export declare function ArcGauge({ value, min, max, arcWidth, color, colorStops, size, showValue, formatValue, ariaLabel, className, }: ArcGaugeProps): import("react").JSX.Element;
