import { IconName } from '../Icon/Icon';
export interface FabMenuItem {
    text: string;
    icon?: IconName;
    value?: string;
    disabled?: boolean;
}
export interface FabMenuItemEventArgs {
    text: string;
    value?: string;
}
export type FabMenuPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export interface FabMenuProps {
    items: FabMenuItem[];
    position?: FabMenuPosition;
    icon?: IconName;
    onClick?: (args: FabMenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function FabMenu({ items, position, icon, onClick, ariaLabel, className, }: FabMenuProps): import("react").JSX.Element;
