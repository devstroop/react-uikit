/**
 * Radzen `Gap` parity (Stack/Row `GetComponentStyle`): unitless numbers
 * and all-digit strings are pixels (`16` → `16px`); any other string is
 * a CSS length used verbatim (`"0.5rem"`, `"2em"`). The all-digit string
 * path keeps raw `<select>` values (always strings) safe to pass through.
 */
export function resolveGap(gap: number | string): string {
  if (typeof gap === 'number') return `${gap}px`;
  return /^\d+$/.test(gap) ? `${gap}px` : gap;
}
