import { HTMLAttributes } from 'react';
export type RowAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline' | 'normal';
export type RowJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'normal' | 'left' | 'right' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
export type RowWrap = boolean | 'nowrap' | 'wrap' | 'wrap-reverse';
/** Gap: px number (unitless = pixels) or CSS length; digits-only strings are px. */
export type RowGap = number | string;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    /** Column gap — px number (unitless = pixels) or CSS length. Unset = 16 (space-4). */
    gap?: RowGap;
    /** Row gap across wrapped lines — same values as `gap`. Unset = follows `gap`. */
    rowGap?: RowGap;
    align?: RowAlign;
    justify?: RowJustify;
    wrap?: RowWrap;
}
export declare function Row({ gap, rowGap, align, justify, wrap, className, style, ...props }: RowProps): import("react").JSX.Element;
