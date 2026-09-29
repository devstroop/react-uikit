import { CSSProperties, HTMLAttributes } from 'react';
export type StackOrientation = 'horizontal' | 'vertical';
export type StackWrap = boolean | 'nowrap' | 'wrap' | 'wrap-reverse';
/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type StackGap = number | string;
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: StackOrientation;
    reverse?: boolean;
    wrap?: StackWrap;
    /** Spacing between children — px number (unitless = pixels) or CSS length. Defaults to 8. */
    gap?: StackGap;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline' | 'normal';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'normal' | 'space-between' | 'space-around' | 'space-evenly';
    className?: string;
    style?: CSSProperties;
}
export declare function Stack({ orientation, reverse, wrap, gap, align, justify, className, style, ...props }: StackProps): import("react").JSX.Element;
