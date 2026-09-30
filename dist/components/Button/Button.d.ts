import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
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
export type ButtonStyle = Exclude<Severity, 'neutral'>;
export type ButtonShade = Shade;
export type ButtonSize = ComponentSize;
export interface ButtonBaseProps {
    variant?: ButtonVariant;
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
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export interface ButtonButtonProps extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
    href?: undefined;
}
export interface ButtonAnchorProps extends ButtonBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    /** Renders an anchor instead of a button (navigation CTAs). */
    href: string;
    /** Anchors use aria-disabled + click suppression (no native disabled). */
    disabled?: boolean;
}
export type ButtonProps = ButtonButtonProps | ButtonAnchorProps;
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLElement>>;
