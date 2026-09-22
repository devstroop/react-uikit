import { useState, type ReactNode } from "react";
import type { ComponentSize } from "../../sizes";
import type { Severity } from "../../types/severity";
import type { Shade } from "../../types/shade";
import { resolveVariant, type Variant } from "../../types/variant";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./Alert.module.css";

/**
 * Supported hues — mirrors the `style-*` rules in Alert.module.css.
 * Narrowed on purpose (Progress/Toast/Stat precedent): wider unions
 * render unstyled with no warning, so unsupported values are a
 * compile error instead of a silent regression.
 */
export type AlertStyle = Extract<
  Severity,
  "primary" | "secondary" | "light" | "base" | "dark" | "info" | "success" | "warning" | "danger"
>;
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
   * Controlled visibility (Radzen Visible parity). When `undefined` the
   * alert manages itself: dismiss hides it. Pass `false` to hide from
   * the parent; dismissal then only fires the callbacks below.
   */
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  className?: string;
}

/** Contextual icon per severity — Radzen Alert auto-icon parity. */
export const ALERT_ICON: Record<AlertStyle, IconName> = {
  primary: "info",
  secondary: "info",
  light: "info",
  base: "info",
  dark: "info",
  info: "info",
  success: "check-circle",
  warning: "alert",
  danger: "x-circle",
};

export function Alert({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity = "base",
  variant = "filled",
  shade,
  size = "md",
  title,
  icon,
  showIcon = true,
  children,
  dismissible = true,
  onDismiss,
  visible,
  onVisibleChange,
  className,
  ...rest
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  // Uncontrolled dismissal latches only in uncontrolled mode: a later
  // controlled `visible={true}` must always re-show.
  if (visible === false || (visible === undefined && dismissed)) {
    return null;
  }

  const dismiss = () => {
    if (visible === undefined) {
      setDismissed(true);
    }
    onDismiss?.();
    onVisibleChange?.(false);
  };

  const t = severity as string;
  const v = resolveVariant(variant, "filled");
  const shadeCls = shade && shade !== "default" ? `shade-${shade}` : null;
  const shownIcon = icon ?? (showIcon ? <Icon name={ALERT_ICON[severity]} /> : null);
  return (
    <div
      role="alert"
      {...rest}
      className={[styles.alert, styles[t], styles[v], shadeCls ? styles[shadeCls] : null, styles[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {shownIcon != null && (
        <span className={styles.icon} aria-hidden="true">
          {shownIcon}
        </span>
      )}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {dismissible && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={dismiss}
          aria-label="Dismiss alert"
        >
          <Icon name="close" size="sm" />
        </button>
      )}
    </div>
  );
}