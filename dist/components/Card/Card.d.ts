import { HTMLAttributes, ReactNode } from 'react';
export type CardVariant = 'elevated' | 'outlined' | 'interactive' | 'text' | 'filled';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    header?: ReactNode;
    footer?: ReactNode;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
