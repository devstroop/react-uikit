import { ReactNode } from 'react';
import { ButtonButtonProps, ButtonShade, ButtonStyle, ButtonVariant } from '../Button/Button';
/** Compact 3-tier subset — same convention as Splitbutton/Selectbar. */
export type TogglebuttonSize = 'sm' | 'md' | 'lg';
export interface TogglebuttonProps extends Omit<ButtonButtonProps, 'onChange' | 'size' | 'aria-pressed'> {
    /** Controlled pressed state. */
    pressed?: boolean;
    /** Uncontrolled initial pressed state. */
    defaultPressed?: boolean;
    onChange?: (pressed: boolean) => void;
    /**
     * Variant used while pressed — Radzen `ToggleVariant` parity.
     * While released the base `variant` applies (Radzen keeps `null`
     * → base Variant too).
     */
    toggleVariant?: ButtonVariant;
    /**
     * Severity used while pressed — Radzen `ToggleButtonStyle` parity.
     * Radzen's parameter defaults to `Primary`, so a pressed toggle
     * renders the primary hue unless overridden.
     */
    toggleSeverity?: ButtonStyle;
    /**
     * Shade used while pressed — Radzen `ToggleShade` parity
     * (Radzen default `darker`).
     */
    toggleShade?: ButtonShade;
    /**
     * Content rendered while pressed; `children` render while
     * released — Radzen `ToggleIcon` parity.
     */
    toggleContent?: ReactNode;
    size?: TogglebuttonSize;
}
export declare const Togglebutton: import('react').ForwardRefExoticComponent<TogglebuttonProps & import('react').RefAttributes<HTMLButtonElement>>;
