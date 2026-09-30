import { HTMLAttributes } from 'react';
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    /** Pin to the viewport top while body scrolls (Radzen header parity). */
    sticky?: boolean;
}
export declare function Header({ sticky, className, children, ...props }: HeaderProps): import("react").JSX.Element;
