import { HTMLAttributes } from 'react';
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    /** Pin to the viewport bottom while body scrolls. */
    sticky?: boolean;
}
export declare function Footer({ sticky, className, children, ...props }: FooterProps): import("react").JSX.Element;
