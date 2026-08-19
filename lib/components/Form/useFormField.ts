import { useEffect, useRef, useState } from "react";
import { runValidators, type Validator } from "../Validators";
import { useFormContext } from "./Form";

export interface UseFormFieldOptions<T> {
  validate?: Validator[];
  initialValue?: T;
}

export interface FormFieldApi<T> {
  value: T | undefined;
  setValue: (value: T) => void;
  errors: string[];
}

export function useFormField<T = string>(name: string, options?: UseFormFieldOptions<T>): FormFieldApi<T> {
  const { registerField, unregisterField, submitCount } = useFormContext();
  const [value, setValue] = useState<T | undefined>(options?.initialValue);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [dirty, setDirty] = useState(false);

  const validateRef = useRef<() => string[]>(() => []);
  validateRef.current = () => runValidators(options?.validate ?? [], value);

  useEffect(() => {
    registerField({ name, validate: () => validateRef.current() });
    return () => unregisterField(name);
  }, [name, registerField, unregisterField]);

  useEffect(() => {
    if (submitCount > 0) {
      setHasSubmitted(true);
      setDirty(false);
    }
  }, [submitCount]);

  const errors = hasSubmitted && !dirty ? validateRef.current() : [];

  const setValueAndDirty = (next: T) => {
    setValue(next);
    setDirty(true);
  };

  return { value, setValue: setValueAndDirty, errors };
}