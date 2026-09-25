import { HTMLAttributes } from 'react';
export type SidebarPosition = "left" | "right" | "start" | "end";
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    position?: SidebarPosition;
    expanded?: boolean;
    responsive?: boolean;
    overlay?: boolean;
    /**
     * Span the full layout height (header through footer) instead of the
     * body row. Only honored for a single fullHeight sidebar — Layout
     * switches to grid placement for it (Radzen FullHeight parity).
     */
    fullHeight?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}
export declare function Sidebar({ position, expanded, responsive, overlay, fullHeight, onClose, className, children, ...props }: SidebarProps): import("react").JSX.Element;
