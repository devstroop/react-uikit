import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import type { Severity } from "../../types/severity";
import type { Shade } from "../../types/shade";
import type { Variant } from "../../types/variant";
import styles from "./Button.module.css";

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
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

const DEPRECATED_MAP: Record<DeprecatedButtonVariant, { variant: ButtonVariant; style: ButtonStyle }> = {
  primary: { variant: "filled", style: "primary" },
  secondary: { variant: "outlined", style: "secondary" },
  // old .ghost was neutral transparent — keep no hue shift
  ghost: { variant: "text", style: "secondary" },
  danger: { variant: "filled", style: "danger" },
  success: { variant: "filled", style: "success" },
  info: { variant: "filled", style: "info" },
};

function resolveVariantStyle(
  variant: ButtonVariant | DeprecatedButtonVariant | undefined,
  severity: ButtonStyle | undefined,
): { variant: ButtonVariant; style: ButtonStyle } {
  const isDeprecated =
    variant === "primary" ||
    variant === "secondary" ||
    variant === "ghost" ||
    variant === "danger" ||
    variant === "success" ||
    variant === "info";
  const picked = severity;
  if (isDeprecated) {
    const mapped = DEPRECATED_MAP[variant as DeprecatedButtonVariant];
    return { variant: mapped.variant, style: picked ?? mapped.style };
  }
  const raw = (variant as ButtonVariant) ?? "filled";
  const canonical: ButtonVariant =
    raw === "filled" || raw === "flat" || raw === "outlined" || raw === "text" ? raw : "filled";
  return { variant: canonical, style: picked ?? "primary" };
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "filled",
    severity,
    shade = "default",
    size = "md",
    fullWidth = false,
    iconOnly = false,
    loading = false,
    visible = true,
    className,
    type = "button",
    disabled,
    children,
    ...props
  },
  ref,
) {
  if (visible === false) return null;
  const resolved = resolveVariantStyle(variant, severity);
  // Radzen parity: Light and Dark button styles don't have Shades —
  // a shade prop on them is ignored, never rendered.
  const unshaded = resolved.style === "light" || resolved.style === "dark";
  const shadeCls = !unshaded && shade !== "default" ? `shade-${shade}` : null;
  const classNames = [
    styles.button,
    styles[resolved.variant],
    styles[`style-${resolved.style}`],
    // backwards-compat: tone-* still emitted
    styles[`tone-${resolved.style}`],
    shadeCls ? styles[shadeCls] : null,
    styles[size],
    // keep deprecated class for backwards-compat selectors (will be removed in 1.0)
    variant && styles[variant as string] ? styles[variant as string] : null,
    fullWidth ? styles.fullWidth : null,
    iconOnly ? styles.iconOnly : null,
    loading ? styles.loading : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span aria-hidden="true" className={styles.spinner} /> : null}
      {children}
    </button>
  );
});