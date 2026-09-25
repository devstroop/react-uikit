import {
  Textbox,
  type TextboxProps,
  type TextboxSize,
} from '../Textbox/Textbox';

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
// Intentionally the identical object (not a wrapper): same rendering,
// same ref type, same displayName in DevTools. A distinct displayName
// would require a wrapper component and break `Input === Textbox`.
export const Input = Textbox;
