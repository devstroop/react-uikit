export type Validator = (value: unknown, model?: unknown) => string | null;
export declare const required: (message?: string) => Validator;
export declare const email: (message?: string) => Validator;
export declare const pattern: (regexp: RegExp, message?: string) => Validator;
export declare const minLength: (min: number, message?: string) => Validator;
export declare const maxLength: (max: number, message?: string) => Validator;
export declare const range: (min: number, max: number, message?: string) => Validator;
/** Equality against a literal or a model-derived value (Radzen Compare parity). */
export declare const compare: (expected: unknown | ((model?: unknown) => unknown), message?: string) => Validator;
/** Checkbox / toggle acceptance (Radzen RequiredValidator on booleans). */
export declare const requiredTrue: (message?: string) => Validator;
/** Escape hatch for arbitrary rules (Radzen CustomValidator parity). */
export declare const custom: (validate: (value: unknown, model?: unknown) => string | null) => Validator;
export declare function runValidators(validators: Validator[], value: unknown, model?: unknown): string[];
