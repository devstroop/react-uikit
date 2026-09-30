import { ButtonHTMLAttributes } from 'react';
import { IconName } from '../Icon/Icon';
export interface SidebarToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon glyph. Defaults to the menu (hamburger) glyph. */
    icon?: IconName;
    /** Accessible label. Defaults to a localized-neutral "Toggle sidebar". */
    label?: string;
}
/**
 * Hamburger toggle for collapsible sidebars (RadzenSidebarToggle
 * parity): a 40px target that flips `expanded` on the Sidebar, usually
 * placed in the Header.
 */
export declare function SidebarToggle({ icon, label, className, type, children, ...props }: SidebarToggleProps): import("react").JSX.Element;
