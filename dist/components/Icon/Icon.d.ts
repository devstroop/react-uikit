import { SVGProps } from 'react';
import { ComponentSize } from '../../sizes';
import { IconSetPrefix } from './sets';
export declare const iconNames: readonly ["check", "close", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "search", "plus", "minus", "alert", "info", "arrow-right", "arrow-left", "external-link", "copy", "trash", "edit", "settings", "user", "users", "download", "upload", "menu", "more-horizontal", "mail", "lock", "eye", "eye-off", "refresh", "calendar", "clock", "check-circle", "x-circle", "shield", "globe", "file", "folder", "home", "key", "link", "star", "star-outline", "ban", "sun", "moon"];
type LegacyIconName = (typeof iconNames)[number];
/** Built-in legacy glyph, or a namespaced set glyph (`mdi:home`, `ph:user`, ...). */
export type IconName = LegacyIconName | `${IconSetPrefix}:${string}`;
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | ComponentSize;
    strokeWidth?: number;
}
export declare const Icon: import('react').ForwardRefExoticComponent<Omit<IconProps, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
export {};
