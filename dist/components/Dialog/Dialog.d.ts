import { ReactNode } from 'react';
export type DialogSize = 'sm' | 'md' | 'lg';
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
    /** Close when the backdrop is clicked. Defaults to true. */
    closeOnOverlayClick?: boolean;
    /** Close on ESC (always preventDefault). Defaults to true. */
    closeOnEsc?: boolean;
    /** User-resizable via the native corner handle. Defaults to false. */
    resizable?: boolean;
    /**
     * Veto gesture closes (X button, backdrop click, ESC). Return false
     * (or a resolving-to-false promise) to keep the dialog open — e.g.
     * unsaved-changes guards. Never consulted on parent-driven close.
     */
    canClose?: () => boolean | Promise<boolean>;
    className?: string;
}
export declare function Dialog({ open, onClose, title, description, children, footer, size, width, height, closeOnOverlayClick, closeOnEsc, resizable, canClose, className, }: DialogProps): import("react").JSX.Element;
