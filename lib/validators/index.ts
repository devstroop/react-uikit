export type Validator = (value: unknown, model?: unknown) => string | null;

const isEmpty = (value: unknown): boolean =>
  value == null || value === "" || (typeof value === "string" && value.trim() === "");

export const required =
  (message = "Required"): Validator =>
  (value) =>
    isEmpty(value) ? message : null;

export const email =
  (message = "Invalid email"): Validator =>
  (value) => {
    if (isEmpty(value)) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value)) ? null : message;
  };

export const pattern =
  (regexp: RegExp, message = "Invalid format"): Validator =>
  (value) => {
    if (isEmpty(value)) return null;
    return regexp.test(String(value)) ? null : message;
  };

export const minLength =
  (min: number, message = `Minimum ${min} characters`): Validator =>
  (value) => {
    if (isEmpty(value)) return null;
    return String(value).length >= min ? null : message;
  };

export const maxLength =
  (max: number, message = `Maximum ${max} characters`): Validator =>
  (value) => {
    if (isEmpty(value)) return null;
    return String(value).length <= max ? null : message;
  };

export const range =
  (min: number, max: number, message = `Between ${min} and ${max}`): Validator =>
  (value) => {
    if (isEmpty(value)) return null;
    const n = Number(value);
    return !Number.isNaN(n) && n >= min && n <= max ? null : message;
  };

export function runValidators(validators: Validator[], value: unknown, model?: unknown): string[] {
  return validators
    .map((validate) => validate(value, model))
    .filter((message): message is string => message != null);
}