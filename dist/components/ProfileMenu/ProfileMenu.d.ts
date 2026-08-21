import { ReactNode } from 'react';
export interface ProfileMenuItem {
    text: string;
    path?: string;
    icon?: string;
    disabled?: boolean;
}
export interface ProfileMenuItemEventArgs {
    text: string;
    path?: string;
}
export interface ProfileMenuProps {
    items: ProfileMenuItem[];
    trigger?: ReactNode;
    /** @deprecated use trigger */
    Template?: ReactNode;
    onClick?: (args: ProfileMenuItemEventArgs) => void;
    /** @deprecated use onClick */
    Click?: (args: ProfileMenuItemEventArgs) => void;
    ariaLabel?: string;
    className?: string;
}
export declare function ProfileMenu({ items, trigger, Template, onClick, Click, ariaLabel, className, }: ProfileMenuProps): import("react").JSX.Element;
