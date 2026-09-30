import { ReactNode } from 'react';
import { MenuItemEventArgs, MenuItemProps } from '../Menu/Menu';
export interface ContextMenuOpenOptions {
    /** Data mode: items render as a nested `Menu isContextMenu` (Radzen items parity,
     * extended with nesting — Radzen's flat `ContextMenuItem` list can't nest). */
    items?: ContextMenuItem[];
    /** Content mode: arbitrary popup content (Radzen `ChildContent` parity,
     * e.g. separators between menu groups). */
    content?: ReactNode;
    /** Fires before an item's own `onClick`. Return `false` to cancel anchor
     * navigation. Does NOT auto-close — call `close()` like Radzen
     * (`ContextMenuService.Close()`), so parents with submenus stay open. */
    onClick?: (args: MenuItemEventArgs) => unknown;
    ariaLabel?: string;
}
export interface ContextMenuApi {
    /** Open at the cursor: `open(event, options)` from an `onContextMenu`
     * handler. Prevents the native menu. */
    open: (event: React.MouseEvent | MouseEvent, options: ContextMenuOpenOptions) => void;
    close: () => void;
    isOpen: boolean;
}
export declare function useContextMenu(): ContextMenuApi;
/** Data-mode item: `MenuItem` props with nestable data children. */
export interface ContextMenuItem extends Omit<MenuItemProps, 'children' | 'onClick'> {
    children?: ContextMenuItem[];
    onClick?: (args: MenuItemEventArgs) => unknown;
}
export declare function ContextMenuProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
