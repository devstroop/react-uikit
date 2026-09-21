/**
 * Structure axis — Radzen Variant parity.
 * Exactly: filled (solid background) | flat (subtle tint, no shadow) |
 * outlined (border only) | text (minimal styling).
 * Matches Radzen Blazor `Variant.Filled/Flat/Outlined/Text` (namespace
 * Radzen; applies to RadzenButton, RadzenBadge, RadzenAlert) and the
 * `rz-variant-*` CSS classes. No aliases — unknown strings fall back.
 */
export type Variant = "filled" | "flat" | "outlined" | "text";
export declare function resolveVariant(raw: string | undefined, fallback?: Variant): Variant;
