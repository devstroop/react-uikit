import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import styles from "./Form.module.css";

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

const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext(): FormContextValue {
  const ctx = useContext(FormContext);
  if (ctx == null) {
    throw new Error("useFormContext must be used within a <Form>");
  }
  return ctx;
}

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

export function Form({
  model,
  onSubmit,
  onInvalidSubmit,
  action,
  method,
  children,
  className,
}: FormProps) {
  const [fields, setFields] = useState<Record<string, FormFieldDescriptor>>({});
  const [submitCount, setSubmitCount] = useState(0);
  const fieldsRef = useRef(fields);
  fieldsRef.current = fields;

  const registerField = useCallback((field: FormFieldDescriptor) => {
    setFields((prev) => (prev[field.name] === field ? prev : { ...prev, [field.name]: field }));
  }, []);

  const unregisterField = useCallback((name: string) => {
    setFields((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const collectErrors = useCallback((): Record<string, string[]> => {
    const errors: Record<string, string[]> = {};
    for (const field of Object.values(fieldsRef.current)) {
      const messages = field.validate();
      if (messages.length > 0) {
        errors[field.name] = messages;
      }
    }
    return errors;
  }, []);

  const submit = useCallback(() => {
    const errors = collectErrors();
    setSubmitCount((count) => count + 1);
    if (Object.keys(errors).length === 0) {
      onSubmit?.(model);
    } else {
      onInvalidSubmit?.(errors);
    }
  }, [collectErrors, model, onSubmit, onInvalidSubmit]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (action != null && method != null) {
      return;
    }
    event.preventDefault();
    submit();
  };

  const value = useMemo(
    () => ({ registerField, unregisterField, submit, submitCount }),
    [registerField, unregisterField, submit, submitCount],
  );

  const classNames = [styles.form, className].filter(Boolean).join(" ");

  return (
    <FormContext.Provider value={value}>
      <form className={classNames} onSubmit={handleSubmit} action={action} method={method}>
        {children}
      </form>
    </FormContext.Provider>
  );
}