import { ElementType, HTMLAttributes } from 'react';
export type TypographyVariant = "display-1" | "display-2" | "display-3" | "display-4" | "display-5" | "display-6" | "body-1" | "body-2" | "caption" | "overline";
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    as?: ElementType;
}
export declare const Typography: import('react').ForwardRefExoticComponent<TypographyProps & import('react').RefAttributes<HTMLElement>>;
