import { HTMLAttributes } from 'react';
export type SidebarPosition = 'left' | 'right' | 'start' | 'end';
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    position?: SidebarPosition;
    expanded?: boolean;
    responsive?: boolean;
    overlay?: boolean;
    /**
     * Pin to the viewport top with independent scrolling (Radzen fixed
     * sidebar parity, without leaving flow): `position: sticky` capped
     * at viewport height, so long nav scrolls inside while the body
     * scrolls the page. Pairs with a sticky Header, which paints above
     * via `z-sticky` — but set `--dx-sidebar-sticky-top` to the header
     * height so the sidebar stops below it instead of sliding under.
     * No-op with `overlay` or `fullHeight` (a spanning sidebar
     * stretches the grid row, so sticking can never engage).
     */
    sticky?: boolean;
    /**
     * Span the full layout height (header through footer) instead of the
     * body row. Only honored for a single fullHeight sidebar — Layout
     * switches to grid placement for it (Radzen FullHeight parity).
     */
    fullHeight?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}
export declare function Sidebar({ position, expanded, responsive, overlay, fullHeight, sticky, onClose, className, children, ...props }: SidebarProps): import("react").JSX.Element;
