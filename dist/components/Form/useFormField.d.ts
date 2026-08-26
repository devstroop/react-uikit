import { Validator } from '../Validators';
export interface UseFormFieldOptions<T> {
    validate?: Validator[];
    initialValue?: T;
}
export interface FormFieldApi<T> {
    value: T | undefined;
    setValue: (value: T) => void;
    errors: string[];
}
export declare function useFormField<T = string>(name: string, options?: UseFormFieldOptions<T>): FormFieldApi<T>;
