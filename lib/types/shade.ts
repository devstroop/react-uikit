/** Lightness step within a Severity color — Radzen Shade parity.
 * Composes with every Variant (filled/flat/outlined/text). */
export type Shade = 'lighter' | 'light' | 'default' | 'dark' | 'darker';
export function shadeClass(shade: Shade | undefined): string | null {
  if (shade == null || shade === 'default') return null;
  return `shade-${shade}`;
}
