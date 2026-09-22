import { type HTMLAttributes, type SVGAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import type { Severity } from "../../types/severity";
import type { Shade } from "../../types/shade";
import styles from "./Progress.module.css";

export type ProgressTone = Extract<Severity, "primary" | "success" | "warning" | "danger">;
export type ProgressShade = Shade;
export type ProgressVariant = "linear" | "circular";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
  value?: number;
  max?: number;
  /**
   * Severity axis — the single severity prop. Native `style` is always
   * plain CSS and never a hue.
   */
  severity?: ProgressTone;
  shade?: ProgressShade;
  indeterminate?: boolean;
  variant?: ProgressVariant;
  size?: number | ComponentSize;
}

export function Progress({
  value = 0,
  max = 100,
  severity = "primary",
  shade,
  indeterminate = false,
  variant = "linear",
  size = "md",
  className,
  ...props
}: ProgressProps) {
  const clamped = max > 0 ? Math.min(max, Math.max(0, value)) : 0;
  const percent = max > 0 ? (clamped / max) * 100 : 0;

  if (variant === "circular") {
    const tier = typeof size === "string";
    const stroke = 2;
    const radius = 10.5;
    const circumference = 2 * Math.PI * radius;
    const dashLength = circumference * (indeterminate ? 0.75 : 1);
    const offset = indeterminate ? 0 : circumference * (1 - percent / 100);

    return (
      <svg
        width={tier ? undefined : size}
        height={tier ? undefined : size}
        viewBox="0 0 24 24"
        role="progressbar"
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-valuenow={indeterminate ? undefined : Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={max}
        {...(props as SVGAttributes<SVGSVGElement>)}
        className={[
          styles.circular,
          styles[severity],
          shade && shade !== "default" ? styles[`shade-${shade}`] : null,
          tier ? styles[`circular-${size}`] : null,
          indeterminate ? styles.indeterminate : null,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <circle className={styles.track} cx={12} cy={12} r={radius} strokeWidth={stroke} />
        <circle
          className={styles.fill}
          cx={12}
          cy={12}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={`${dashLength} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    );
  }

  const shadeCls = shade && shade !== "default" ? `shade-${shade}` : null;
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={max}
      className={[
        styles.track,
        styles[severity],
        shadeCls ? styles[shadeCls] : null,
        typeof size === "string" ? styles[`linear-${size}`] : null,
        indeterminate ? styles.indeterminate : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div
        className={styles.bar}
        style={indeterminate ? undefined : { width: `${percent}%` }}
      />
    </div>
  );
}