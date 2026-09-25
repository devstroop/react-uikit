import { cloneElement, isValidElement, useId, type ReactNode } from "react";
import styles from "./Field.module.css";

export interface FieldProps {
  label?: ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: ReactNode;
  /** Alias for `hint` — matches 1km TextField `supporting` prop. */
  supporting?: ReactNode;
  error?: ReactNode;
  children: ReactNode | ((ids: { inputId: string; hintId: string; errorId: string }) => ReactNode);
  className?: string;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function Field({ label, htmlFor, required, hint, supporting, error, children, className, visible = true }: FieldProps) {
  const resolvedHint = hint ?? supporting;
  const inputId = useId();
  const errorId = useId();
  const hintId = useId();
  if (visible === false) return null;
  const messageId = error != null ? errorId : resolvedHint != null ? hintId : null;

  const resolvedChildren =
    typeof children === "function" ? (children as (ids: { inputId: string; hintId: string; errorId: string }) => ReactNode)({ inputId, hintId, errorId }) : children;

  // Single association target: an explicit child id wins, then the
  // explicit `htmlFor`, then the generated id. Both the label and the
  // cloned control use it, so they can never point at different nodes.
  const childId =
    isValidElement(resolvedChildren) &&
    typeof (resolvedChildren.props as Record<string, unknown>)["id"] === "string"
      ? ((resolvedChildren.props as Record<string, unknown>)["id"] as string)
      : undefined;
  const targetId = childId ?? htmlFor ?? inputId;

  // Clone only when useful: a missing id is backfilled on plain DOM
  // controls (always safe); custom components are left alone unless a
  // message must be attached, since an unexpected `id` prop may not
  // be forwarded by the component.
  const needsClone =
    isValidElement(resolvedChildren) &&
    (messageId != null ||
      (childId == null && typeof resolvedChildren.type === "string"));
  // The label may only point at an id that will exist in the DOM: an
  // explicit child id, an explicit `htmlFor` (caller's own wiring), or a
  // generated id we actually backfill via clone. Otherwise the label
  // carries no `htmlFor` — a dangling one breaks click-focus and AT
  // association worse than no association.
  const idApplied = childId != null || htmlFor != null || needsClone;
  const control =
    needsClone && isValidElement(resolvedChildren)
      ? cloneElement(
          resolvedChildren,
          {
            id: targetId,
            "aria-describedby":
              messageId != null
                ? [
                    (resolvedChildren.props as Record<string, unknown>)["aria-describedby"],
                    messageId,
                  ]
                    .filter((v): v is string => typeof v === "string")
                    .join(" ") || undefined
                : (resolvedChildren.props as Record<string, unknown>)["aria-describedby"],
            "aria-invalid": error != null
              ? true
              : (resolvedChildren.props as Record<string, unknown>)["aria-invalid"],
          } as Record<string, unknown>,
        )
      : resolvedChildren;

  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      {label != null && (
        <label className={styles.label} htmlFor={idApplied ? targetId : undefined}>
          {label}
          {required === true && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      {control}
      {error != null ? (
        <div id={errorId} className={styles.error} aria-live="polite">
          {error}
        </div>
      ) : resolvedHint != null ? (
        <div id={hintId} className={styles.hint}>{resolvedHint}</div>
      ) : null}
    </div>
  );
}