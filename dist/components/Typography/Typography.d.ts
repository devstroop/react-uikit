import { ElementType, HTMLAttributes } from 'react';
export type TypographyVariant = "display-1" | "display-2" | "display-3" | "display-4" | "display-5" | "display-6" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle-1" | "subtitle-2" | "body-1" | "body-2" | "caption" | "overline";
export type TypographyAlign = "left" | "center" | "right" | "justify";
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    as?: ElementType;
    align?: TypographyAlign;
}
export declare const Typography: import('react').ForwardRefExoticComponent<TypographyProps & import('react').RefAttributes<HTMLElement>>;
