import { CSSProperties, HTMLAttributes } from 'react';
/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type AutoGridGap = number | string;
export interface AutoGridProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Minimum track width — number (px) or any CSS length.
     * Tracks fill the row and wrap (`auto-fit`); a lone track spans
     * full width via `min(100%, …)`. Defaults to 240.
     */
    min?: number | string;
    /**
     * Gap between tracks — px number (unitless = pixels) or CSS length.
     * Defaults to 12.
     */
    gap?: AutoGridGap;
    className?: string;
    style?: CSSProperties;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function AutoGrid({ min, gap, className, style, visible, ...props }: AutoGridProps): import("react").JSX.Element | null;
