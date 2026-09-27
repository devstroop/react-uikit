import { HTMLAttributes, ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface PanelMenuItemEventArgs {
    text: string;
    value?: string;
    path?: string;
}
/** Radzen `NavLinkMatch` parity: exact vs prefix active-path matching. */
export type PanelMenuMatch = 'exact' | 'prefix';
/** Radzen `MenuItemDisplayStyle` parity (stacked = icon-over-text rail). */
export type PanelMenuDisplayStyle = 'icon' | 'iconAndText' | 'stacked';
/** Radzen `PanelMenuRenderMode` parity. Client renders the whole tree up front
 * (collapsed branches hidden); server mounts collapsed branches on expand. */
export type PanelMenuRenderMode = 'client' | 'server';
export interface PanelMenuProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    children: ReactNode;
    /** Allow multiple expanded items (default true). Radzen `Multiple` parity. */
    multiple?: boolean;
    /** Radzen `DisplayStyle` parity. */
    displayStyle?: PanelMenuDisplayStyle;
    /** Show the expand caret. Radzen `ShowArrow` parity. */
    showArrow?: boolean;
    /** Default URL matching for `Selected` sync. Radzen `Match` parity. */
    match?: PanelMenuMatch;
    /** Radzen `RenderMode` parity. */
    renderMode?: PanelMenuRenderMode;
    /** Parent-level click: fires before the item's own `onClick`. Radzen `Click` parity.
     * Return `false` to cancel anchor navigation (client-side routers). */
    onClick?: (args: PanelMenuItemEventArgs) => unknown;
    ariaLabel?: string;
}
export interface PanelMenuItemProps {
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
    match?: PanelMenuMatch;
    disabled?: boolean;
    /** Custom row content; overrides icon/text/caret rendering. Radzen `Template` parity. */
    template?: ReactNode;
    /** Controlled expanded state. Radzen `@bind-Expanded` parity. */
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    /** Controlled selected state. Radzen `@bind-Selected` parity. When uncontrolled
     * (no `onSelectedChange`), selection syncs from the URL like Radzen. */
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    /** Item-level click: fires after the parent PanelMenu `onClick`. Radzen item `Click` parity.
     * Return `false` to cancel anchor navigation (client-side routers). */
    onClick?: (args: PanelMenuItemEventArgs) => unknown;
    children?: ReactNode;
}
export declare function PanelMenuItem(props: PanelMenuItemProps): import("react").JSX.Element;
export declare function PanelMenu({ children, multiple, displayStyle, showArrow, match, renderMode, onClick, ariaLabel, className, ...rest }: PanelMenuProps): import("react").JSX.Element;
