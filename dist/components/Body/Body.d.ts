import { HTMLAttributes } from 'react';
export interface BodyProps extends HTMLAttributes<HTMLElement> {
    as?: 'main' | 'div';
    children?: React.ReactNode;
    /** Inner padding. Set false for edge-to-edge content (media, maps). */
    padded?: boolean;
}
export declare function Body({ as, padded, className, children, ...props }: BodyProps): import("react").JSX.Element;
