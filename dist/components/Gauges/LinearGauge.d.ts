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
    ticks?: {
        count?: number;
        showLabels?: boolean;
    };
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
/**
 * Linear gauge (uikit#97): horizontal/vertical scale with ticks, range
 * bands, value fill + pointer, and a value label. Meter semantics.
 */
export declare function LinearGauge({ value, min, max, orientation, ticks, ranges, color, length, thickness, showValue, formatValue, ariaLabel, className, }: LinearGaugeProps): import("react").JSX.Element;
