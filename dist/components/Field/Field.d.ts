import { ReactNode } from 'react';
/**
 * Top-label field wrapper (label + hint + error with id/aria wiring).
 *
 * @deprecated Prefer `FormField` for new code — the material field box
 * (floating label, start/end adornments, variants). `Field` keeps its
 * exact rendering and will be removed in 3.0.
 */
export interface FieldProps {
    label?: ReactNode;
    htmlFor?: string;
    required?: boolean;
    hint?: ReactNode;
    /** Alias for `hint` — matches 1km TextField `supporting` prop. */
    supporting?: ReactNode;
    error?: ReactNode;
    children: ReactNode | ((ids: {
        inputId: string;
        hintId: string;
        errorId: string;
    }) => ReactNode);
    className?: string;
    /** Render nothing when false. Defaults to true. */
    visible?: boolean;
}
export declare function Field({ label, htmlFor, required, hint, supporting, error, children, className, visible, }: FieldProps): import("react").JSX.Element | null;
