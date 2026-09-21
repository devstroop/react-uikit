import { ReactNode } from 'react';
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
}
export declare function Field({ label, htmlFor, required, hint, supporting, error, children, className }: FieldProps): import("react").JSX.Element;
