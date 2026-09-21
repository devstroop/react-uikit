import { ButtonHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
/** Radzen Variant parity: exactly filled | flat | outlined | text. */
export type ButtonVariant = Variant;
/**
 * Supported hues — mirrors the `style-*` rules in Button.module.css
 * (every hue except `neutral`). Narrowed on purpose: wider unions
 * render unstyled with no warning.
 */
export type ButtonStyle = Exclude<Severity, "neutral">;
export type ButtonShade = Shade;
/** @deprecated use `variant` × `buttonStyle` × `shade` (e.g. `variant="filled" buttonStyle="danger"`). */
export type DeprecatedButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success" | "info";
export type ButtonSize = ComponentSize;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant | DeprecatedButtonVariant;
    /**
     * Severity axis — the single severity prop (Radzen ButtonStyle parity).
     * Native `style` is always plain CSS and never a hue.
     */
    severity?: ButtonStyle;
    shade?: ButtonShade;
    size?: ButtonSize;
    fullWidth?: boolean;
    iconOnly?: boolean;
    /** Inline spinner + `aria-busy`, disables click. */
    loading?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
