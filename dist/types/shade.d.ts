/** Lightness step within a Severity color — Radzen Shade parity. Only on filled today. */
export type Shade = 'lighter' | 'light' | 'default' | 'dark' | 'darker';
export declare function shadeClass(shade: Shade | undefined): string | null;
