/** Lightness step within a Severity color — Radzen Shade parity,
 * extended with an explicit `medium` step so the range reads
 * lighter, light, medium, dark, darker.
 * `default` always pins to `medium`: both map to no class and render
 * the base look. The pin is explicit (not structural) so test and
 * production CSS-modules behavior agree — a missing-key lookup
 * returns undefined in prod but a fabricated class under mocks.
 * Composes with every Variant (filled/flat/outlined/text). */
export type Shade = 'lighter' | 'light' | 'medium' | 'default' | 'dark' | 'darker';
export declare function shadeClass(shade: Shade | undefined): string | null;
