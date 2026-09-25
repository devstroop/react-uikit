export interface MenuItem {
    text: string;
    value?: string;
    icon?: string;
    path?: string;
    disabled?: boolean;
    children?: MenuItem[];
}
export interface MenuItemEventArgs {
    text: string;
    value?: string;
    path?: string;
}
export interface MenuProps {
    items: MenuItem[];
    orientation?: 'horizontal' | 'vertical';
    onClick?: (args: MenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function Menu({ items, orientation, onClick, ariaLabel, className, }: MenuProps): import("react").JSX.Element;
