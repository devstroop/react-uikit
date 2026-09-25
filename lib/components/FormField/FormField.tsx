import { cloneElement, isValidElement, useId, type ReactNode } from 'react';
import type { Variant } from '../../types/variant';
import styles from './FormField.module.css';

export type FormFieldVariant = Extract<Variant, 'filled' | 'outlined' | 'flat'>;

export interface FormFieldProps {
  /** Label text (or template) shown above or floating over the control. */
  text?: ReactNode;
  /** Leading adornment inside the box (search icon, currency prefix). */
  start?: ReactNode;
  /** Trailing adornment inside the box (toggle, clear button, units). */
  end?: ReactNode;
  /** Hint or validation message rendered below the box. */
  helper?: ReactNode;
  /**
   * Explicit id for label association (Radzen `Component` parity).
   * Prefer passing `id` on the child or using the render-prop ids;
   * use this when the id lives elsewhere. The label points here only
   * when no element id takes precedence — and only when association
   * can actually be backfilled (see below).
   */
  component?: string;
  /** Float the label on focus/filled. Defaults to true. */
  allowFloatingLabel?: boolean;
  /** Box chrome. Defaults to outlined. */
  variant?: FormFieldVariant;
  /** Error state: danger border + danger helper. */
  invalid?: boolean;
  /** Show the required marker. */
  required?: boolean;
  children?: ReactNode | ((ids: { inputId: string }) => ReactNode);
  className?: string;
  /** Render nothing when false. Defaults to true. */
  visible?: boolean;
}

export function FormField({
  text,
  start,
  end,
  helper,
  component,
  allowFloatingLabel = true,
  variant = 'outlined',
  invalid = false,
  required = false,
  children,
  className,
  visible = true,
}: FormFieldProps) {
  const generatedId = useId();
  const helperId = useId();
  if (visible === false) return null;
  const inputId = component ?? generatedId;

  const resolvedChildren =
    typeof children === 'function'
      ? (children as (ids: { inputId: string }) => ReactNode)({
          inputId,
        })
      : children;

  // Clone targets: plain DOM children (an id backfill is always
  // safe there) and custom components (which may forward id /
  // aria-describedby / aria-invalid). Fragments, StrictMode and
  // friends (symbol types) never render extra props to the DOM —
  // cloning those would set ids that don't exist while the label
  // still points at them, so they are never cloned. A clone happens
  // only when useful: a missing DOM id is backfilled, a helper
  // message is attached via aria-describedby, or invalid must reach
  // AT via aria-invalid.
  const childType = isValidElement(resolvedChildren)
    ? resolvedChildren.type
    : null;
  const isDomChild = typeof childType === 'string';
  const isCloneTarget =
    isValidElement(resolvedChildren) && typeof childType !== 'symbol';
  const childProps = isValidElement(resolvedChildren)
    ? (resolvedChildren.props as Record<string, unknown>)
    : null;
  const childId =
    typeof childProps?.['id'] === 'string'
      ? (childProps['id'] as string)
      : undefined;
  const needsClone =
    isCloneTarget &&
    (helper != null || invalid || (childId == null && isDomChild));
  // The label may only point at an id that will exist in the DOM:
  // an explicit child id, an explicit `component` the caller wires
  // themselves, or a generated id we actually backfill via clone.
  // Otherwise the label carries no `htmlFor` — a dangling one breaks
  // click-focus and AT association worse than no association.
  const idApplied = childId != null || component != null || needsClone;
  const childTag =
    isDomChild && isValidElement(resolvedChildren)
      ? (resolvedChildren.type as string).toLowerCase()
      : null;
  // Blank placeholder drives the CSS float trigger
  // (:placeholder-shown) — but only on text-like controls. An
  // explicit placeholder always wins; checkboxes, radios, dates,
  // selects and friends are untouched (the attribute would be
  // invalid there and :placeholder-shown never matches, which
  // would pin the label in the floated position).
  const inputType =
    childTag === 'input' && typeof childProps?.['type'] === 'string'
      ? (childProps['type'] as string).toLowerCase()
      : null;
  const supportsPlaceholder =
    childTag === 'textarea' ||
    (childTag === 'input' &&
      (inputType == null ||
        [
          'text',
          'search',
          'url',
          'tel',
          'email',
          'password',
          'number',
        ].includes(inputType)));
  const control =
    needsClone && isValidElement(resolvedChildren)
      ? cloneElement(
          resolvedChildren as React.ReactElement<Record<string, unknown>>,
          {
            id: childId ?? inputId,
            ...(allowFloatingLabel &&
            supportsPlaceholder &&
            childProps?.['placeholder'] == null
              ? { placeholder: ' ' }
              : {}),
            ...(helper != null
              ? {
                  'aria-describedby': [
                    childProps?.['aria-describedby'],
                    helperId,
                  ]
                    .filter((v): v is string => typeof v === 'string')
                    .join(' '),
                }
              : {}),
            ...(invalid
              ? {
                  'aria-invalid': true,
                }
              : {}),
          }
        )
      : resolvedChildren;

  const labelNode =
    text != null ? (
      <label
        className={styles.label}
        htmlFor={idApplied ? (childId ?? inputId) : undefined}
      >
        {text}
        {required === true && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
    ) : null;

  return (
    <div
      className={[
        styles.formfield,
        styles[variant],
        allowFloatingLabel ? styles.floating : null,
        invalid ? styles.invalid : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {!allowFloatingLabel ? labelNode : null}
      <div className={styles.content}>
        {start != null && <div className={styles.start}>{start}</div>}
        {control}
        {allowFloatingLabel ? labelNode : null}
        {end != null && <div className={styles.end}>{end}</div>}
      </div>
      {helper != null && (
        <div id={helperId} className={styles.helper}>
          {helper}
        </div>
      )}
    </div>
  );
}
