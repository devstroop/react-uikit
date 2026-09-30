import { TextBoxProps, TextBoxSize } from '../TextBox/TextBox';
/**
 * @deprecated Use `TextBox` — the canonical single-line input since
 * 2.0. Identical rendering (same values, tokenized implementation);
 * will be removed in 3.0.
 */
export type InputSize = TextBoxSize;
/**
 * @deprecated Use `TextBox` — the canonical single-line input since
 * 2.0. Identical rendering; will be removed in 3.0.
 */
export type InputProps = TextBoxProps;
/**
 * @deprecated Use `TextBox` — the canonical single-line input since
 * 2.0. Identical rendering; will be removed in 3.0.
 */
export declare const Input: import('react').ForwardRefExoticComponent<TextBoxProps & import('react').RefAttributes<HTMLInputElement>>;
