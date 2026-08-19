import { CSSProperties, HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type StackOrientation = "horizontal" | "vertical";
export type StackWrap = boolean | "nowrap" | "wrap" | "wrap-reverse";
export type StackGap = ComponentSize | number | string;
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: StackOrientation;
    reverse?: boolean;
    wrap?: StackWrap;
    gap?: StackGap;
    align?: "start" | "center" | "end" | "stretch" | "baseline" | "normal";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "normal" | "space-between" | "space-around" | "space-evenly";
    className?: string;
    style?: CSSProperties;
}
export declare function Stack({ orientation, reverse, wrap, gap, align, justify, className, style, ...props }: StackProps): import("react").JSX.Element;
