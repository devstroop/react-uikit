import { useState, type ReactNode } from "react";
import type { ComponentSize } from "../../sizes";
import type { Severity } from "../../types/severity";
import type { Shade } from "../../types/shade";
import { resolveVariant, type Variant } from "../../types/variant";
import styles from "./Alert.module.css";

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

export function Alert({
  severity = "info",
  variant = "flat",
  shade,
  size = "md",
  title,
  icon,
  children,
  dismissible = false,
  onDismiss,
  className,
  ...rest
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  const dismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  const t = severity as string;
  const v = resolveVariant(variant, "flat");
  const shadeCls = shade && shade !== "default" ? `shade-${shade}` : null;
  return (
    <div
      role="alert"
      {...rest}
      className={[styles.alert, styles[t], styles[v], shadeCls ? styles[shadeCls] : null, styles[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {icon != null && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
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
          ×
        </button>
      )}
    </div>
  );
}