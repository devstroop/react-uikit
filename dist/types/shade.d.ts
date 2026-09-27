/** Lightness step within a Severity color — Radzen Shade parity,
 * extended with an explicit `medium` step so the range reads
 * lighter, light, medium, dark, darker.
 * `default` always pins to `medium`: both render the base look —
 * no `shade-medium` CSS rules exist on purpose, so an explicit
 * `medium` emits its class yet matches nothing, identical to default.
 * Composes with every Variant (filled/flat/outlined/text). */
export type Shade = 'lighter' | 'light' | 'medium' | 'default' | 'dark' | 'darker';
export declare function shadeClass(shade: Shade | undefined): string | null;
