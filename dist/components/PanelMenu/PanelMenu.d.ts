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
    showArrow?: boolean;
    displayStyle?: 'icon' | 'iconAndText';
    onClick?: (args: PanelMenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function PanelMenu({ items, multiple, showArrow, displayStyle, onClick, ariaLabel, className, }: PanelMenuProps): import("react").JSX.Element;
