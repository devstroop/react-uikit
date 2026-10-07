import { ReactNode } from 'react';
import { IconName } from '../Icon/Icon';
export interface ProfileMenuItem {
    text: string;
    path?: string;
    icon?: IconName;
    disabled?: boolean;
}
export interface ProfileMenuItemEventArgs {
    text: string;
    path?: string;
}
export interface ProfileMenuProps {
    items: ProfileMenuItem[];
    trigger?: ReactNode;
    onClick?: (args: ProfileMenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function ProfileMenu({ items, trigger, onClick, ariaLabel, className, }: ProfileMenuProps): import("react").JSX.Element;
