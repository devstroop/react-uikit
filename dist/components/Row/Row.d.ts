import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline" | "normal";
export type RowJustify = "start" | "center" | "end" | "between" | "around" | "evenly" | "normal" | "left" | "right" | "stretch" | "space-between" | "space-around" | "space-evenly";
export type RowWrap = boolean | "nowrap" | "wrap" | "wrap-reverse";
export type RowGap = ComponentSize | number | string;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    gap?: RowGap;
    rowGap?: RowGap;
    align?: RowAlign;
    justify?: RowJustify;
    wrap?: RowWrap;
}
export declare function Row({ gap, rowGap, align, justify, wrap, className, style, ...props }: RowProps): import("react").JSX.Element;
