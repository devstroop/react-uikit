export interface PanelMenuItem {
    text: string;
    icon?: string;
    value?: string;
    path?: string;
    disabled?: boolean;
    children?: PanelMenuItem[];
}
export interface PanelMenuItemEventArgs {
    text: string;
    value?: string;
    path?: string;
}
export interface PanelMenuProps {
    items: PanelMenuItem[];
    multiple?: boolean;
    /** @deprecated use multiple */
    Multiple?: boolean;
    showArrow?: boolean;
    /** @deprecated use showArrow */
    ShowArrow?: boolean;
    displayStyle?: "icon" | "iconAndText";
    /** @deprecated use displayStyle */
    DisplayStyle?: "icon" | "iconAndText";
    onClick?: (args: PanelMenuItemEventArgs) => void;
    /** @deprecated use onClick */
    Click?: (args: PanelMenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function PanelMenu({ items, multiple, Multiple, showArrow, ShowArrow, displayStyle, DisplayStyle, onClick, Click, ariaLabel, className, }: PanelMenuProps): import("react").JSX.Element;
