import { ReactNode } from 'react';
import { Variant } from '../../types/variant';
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
    children?: ReactNode | ((ids: {
        inputId: string;
    }) => ReactNode);
    className?: string;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function FormField({ text, start, end, helper, component, allowFloatingLabel, variant, invalid, required, children, className, visible, }: FormFieldProps): import("react").JSX.Element | null;
