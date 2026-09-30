import { HTMLAttributes, ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface MenuItemEventArgs {
    text: string;
    value?: string;
    path?: string;
}
/** Radzen `NavLinkMatch` parity: exact vs prefix active-path matching. */
export type MenuMatch = 'exact' | 'prefix';
export interface MenuProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    children: ReactNode;
    /** Open submenus on click (true, default) or on hover (false). Radzen `ClickToOpen` parity. */
    clickToOpen?: boolean;
    /** Cascade level 2+ submenus sideways instead of inline. Radzen `Flyout` parity. */
    flyout?: boolean;
    /** Collapse to a hamburger toggle on small screens. Radzen `Responsive` parity. */
    responsive?: boolean;
    /** Render as a vertical context-menu popup (`role="menu"`). Radzen `IsContextMenu` parity. */
    isContextMenu?: boolean;
    /** Parent-level click: fires before the item's own `onClick`. Radzen `Click` parity.
     * Return `false` to cancel anchor navigation (client-side routers). */
    onClick?: (args: MenuItemEventArgs) => unknown;
    /** Fired when the menu requests dismissal (Escape at root). Radzen `Close` parity. */
    onClose?: () => void;
    ariaLabel?: string;
    /** Hamburger toggle aria-label. Radzen `ToggleAriaLabel` parity. */
    toggleAriaLabel?: string;
}
export interface MenuItemProps {
    text: string;
    value?: string;
    /** Anchor+emit: renders `<a href>` and still fires click events (Radzen `Path` parity).
     * Hash-router consumers preventDefault() in their handler for client-side routing. */
    path?: string;
    icon?: IconName;
    iconColor?: string;
    image?: string;
    imageAlt?: string;
    target?: string;
    match?: MenuMatch;
    disabled?: boolean;
    /** Custom row content; overrides icon/text/caret rendering. Radzen `Template` parity. */
    template?: ReactNode;
    /** Item-level click: fires after the parent Menu `onClick`. Radzen item `Click` parity.
     * Return `false` to cancel anchor navigation (client-side routers). */
    onClick?: (args: MenuItemEventArgs) => unknown;
    /** Controlled open state for items with children. Radzen `Expanded` parity. */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
}
export declare function MenuItem(props: MenuItemProps): import("react").JSX.Element;
export declare function Menu({ children, clickToOpen, flyout, responsive, isContextMenu, onClick, onClose, ariaLabel, toggleAriaLabel, className, ...rest }: MenuProps): import("react").JSX.Element;
