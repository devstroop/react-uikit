import { ReactNode } from 'react';
import { ComponentSize } from '../../sizes';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
/**
 * Supported hues — mirrors the `style-*` rules in Alert.module.css.
 * Narrowed on purpose (Progress/Toast/Stat precedent): wider unions
 * render unstyled with no warning, so unsupported values are a
 * compile error instead of a silent regression.
 */
export type AlertStyle = Extract<Severity, "info" | "success" | "warning" | "danger">;
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
    children?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}
export declare function Alert({ severity, variant, shade, size, title, icon, children, dismissible, onDismiss, className, ...rest }: AlertProps): import("react").JSX.Element | null;
