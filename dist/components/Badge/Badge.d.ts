import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
import { Severity } from '../../types/severity';
import { Shade } from '../../types/shade';
import { Variant } from '../../types/variant';
/**
 * Supported hues — mirrors the severity tint rules in Badge.module.css
 * (`neutral/primary/success/warning/danger`). Narrowed on purpose:
 * wider unions render unstyled with no warning.
 */
export type BadgeStyle = Extract<Severity, "neutral" | "primary" | "success" | "warning" | "danger">;
export type BadgeVariant = Variant;
export type BadgeSize = ComponentSize;
export type BadgeShade = Shade;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Severity axis — the single severity prop (Radzen BadgeStyle parity).
     * Native `style` is always plain CSS and never a hue.
     */
    severity?: BadgeStyle;
    variant?: BadgeVariant;
    shade?: BadgeShade;
    size?: BadgeSize;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
