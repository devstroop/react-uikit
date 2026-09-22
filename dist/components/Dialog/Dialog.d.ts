import { ReactNode } from 'react';
export type DialogSize = "sm" | "md" | "lg";
export interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    size?: DialogSize;
    /** Explicit width (any CSS length). Overrides the size tier. */
    width?: number | string;
    /** Explicit height (any CSS length). Defaults to content height. */
    height?: number | string;
    className?: string;
}
export declare function Dialog({ open, onClose, title, description, children, footer, size, width, height, className, }: DialogProps): import("react").JSX.Element;
