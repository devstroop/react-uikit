export type Validator = (value: unknown, model?: unknown) => string | null;
export declare const required: (message?: string) => Validator;
export declare const email: (message?: string) => Validator;
export declare const pattern: (regexp: RegExp, message?: string) => Validator;
export declare const minLength: (min: number, message?: string) => Validator;
export declare const maxLength: (max: number, message?: string) => Validator;
export declare const range: (min: number, max: number, message?: string) => Validator;
export declare function runValidators(validators: Validator[], value: unknown, model?: unknown): string[];
