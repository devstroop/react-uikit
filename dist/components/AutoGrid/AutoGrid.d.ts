import { CSSProperties, HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type AutoGridGap = ComponentSize | number | string;
export interface AutoGridProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Minimum track width — number (px) or any CSS length.
     * Tracks fill the row and wrap (`auto-fit`); a lone track spans
     * full width via `min(100%, …)`. Defaults to 240.
     */
    min?: number | string;
    /**
     * Gap between tracks — tier name, px number, or CSS value.
     * Defaults to 'md'.
     */
    gap?: AutoGridGap;
    className?: string;
    style?: CSSProperties;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function AutoGrid({ min, gap, className, style, visible, ...props }: AutoGridProps): import("react").JSX.Element | null;
