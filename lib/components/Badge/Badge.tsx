import { forwardRef, type HTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import type { Severity } from "../../types/severity";
import type { Shade } from "../../types/shade";
import { resolveVariant, type Variant } from "../../types/variant";
import styles from "./Badge.module.css";

/**
 * Supported hues — mirrors the severity tint rules in Badge.module.css
 * (`neutral/primary/secondary/light/base/dark/info/success/warning/danger`). Narrowed on purpose:
 * wider unions render unstyled with no warning.
 */
export type BadgeStyle = Extract<
  Severity,
  "neutral" | "primary" | "secondary" | "light" | "base" | "dark" | "info" | "success" | "warning" | "danger"
>;
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

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { severity = "primary", variant = "filled", shade, size = "md", className, children, ...props },
  ref,
) {
  const t = severity as string;
  const v = resolveVariant(variant, "filled");
  const shadeCls = shade && shade !== "default" ? `shade-${shade}` : null;
  return (
    <span
      ref={ref}
      className={[styles.badge, styles[size], styles[t], styles[v], shadeCls ? styles[shadeCls] : null, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
});