import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type RowJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type RowGap = ComponentSize | number | string;
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    gap?: RowGap;
    align?: RowAlign;
    justify?: RowJustify;
    wrap?: boolean;
}
export declare function Row({ gap, align, justify, wrap, className, style, ...props }: RowProps): import("react").JSX.Element;
