import { ReactNode } from 'react';
import { ComponentSize } from '../../sizes';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
import { IconName } from '../Icon/Icon';
/**
 * Supported hues — mirrors the `style-*` rules in Alert.module.css.
 * Narrowed on purpose (Progress/Toast/Stat precedent): wider unions
 * render unstyled with no warning, so unsupported values are a
 * compile error instead of a silent regression.
 */
export type AlertStyle = Extract<Severity, "primary" | "secondary" | "light" | "base" | "dark" | "info" | "success" | "warning" | "danger">;
export type AlertVariant = Variant;
export type AlertShade = Shade;
export type AlertSize = ComponentSize;
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Severity axis — the single severity prop (Radzen AlertStyle parity).
     * Native `style` is always plain CSS and never a hue.
     */
    severity?: AlertStyle;
    variant?: AlertVariant;
    shade?: AlertShade;
    size?: AlertSize;
    title?: ReactNode;
    icon?: ReactNode;
    /** Show the contextual icon for the severity (Radzen ShowIcon parity). */
    showIcon?: boolean;
    children?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    /**
     * Controlled visibility. When `undefined` the
     * alert manages itself: dismiss hides it. Pass `false` to hide from
     * the parent; dismissal then only fires the callbacks below.
     */
    visible?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    className?: string;
}
/** Contextual icon per severity — Radzen Alert auto-icon parity. */
export declare const ALERT_ICON: Record<AlertStyle, IconName>;
export declare function Alert({ severity, variant, shade, size, title, icon, showIcon, children, dismissible, onDismiss, visible, onVisibleChange, className, ...rest }: AlertProps): import("react").JSX.Element | null;
