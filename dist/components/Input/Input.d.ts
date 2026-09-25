import { TextboxProps, TextboxSize } from '../Textbox/Textbox';
/**
 * @deprecated Use `Textbox` — the canonical single-line input since
 * 2.0. Identical rendering (same values, tokenized implementation);
 * will be removed in 3.0.
 */
export type InputSize = TextboxSize;
/**
 * @deprecated Use `Textbox` — the canonical single-line input since
 * 2.0. Identical rendering; will be removed in 3.0.
 */
export type InputProps = TextboxProps;
/**
 * @deprecated Use `Textbox` — the canonical single-line input since
 * 2.0. Identical rendering; will be removed in 3.0.
 */
export declare const Input: import('react').ForwardRefExoticComponent<TextboxProps & import('react').RefAttributes<HTMLInputElement>>;
