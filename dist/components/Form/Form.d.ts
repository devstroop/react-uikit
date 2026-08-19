import { ReactNode } from 'react';
export interface FormFieldDescriptor {
    name: string;
    validate: () => string[];
}
export interface FormContextValue {
    registerField: (field: FormFieldDescriptor) => void;
    unregisterField: (name: string) => void;
    submit: () => void;
    submitCount: number;
}
export declare function useFormContext(): FormContextValue;
export type FormMethod = "get" | "post";
export interface FormProps {
    model: unknown;
    onSubmit?: (model: unknown) => void;
    onInvalidSubmit?: (errors: Record<string, string[]>) => void;
    action?: string;
    method?: FormMethod;
    children: ReactNode;
    className?: string;
}
export declare function Form({ model, onSubmit, onInvalidSubmit, action, method, children, className, }: FormProps): import("react").JSX.Element;
