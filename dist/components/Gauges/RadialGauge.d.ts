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
    /** Scale ticks + labels. `step` places a tick every `step` units, the way
     * Radzen's `RadzenRadialGaugeScale Step` does; without it the range is split
     * into `count` marks (8 by default). `count: 0` hides the scale. */
    ticks?: {
        count?: number;
        step?: number;
        showLabels?: boolean;
    };
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
/**
 * Radial gauge (uikit#97): circular scale with ticks, range bands, needle
 * pointer(s), and a value label. Meter semantics throughout.
 */
export declare function RadialGauge({ value, min, max, startAngle, endAngle, ticks, ranges, pointers, color, size, showValue, formatValue, ariaLabel, className, }: RadialGaugeProps): import("react").JSX.Element;
