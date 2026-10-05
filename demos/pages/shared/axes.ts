import type { ButtonShade, ButtonVariant } from '../../../lib/main';

/**
 * Shared demo axis constants (Radzen RadzenBlazorDemos `Shared` helpers
 * parity): the severity/variant/shade grids every component demo builds
 * its matrix sections on. Extracted from buttons.tsx so badge, alert,
 * input, and the rest of the playground can dogfood one source.
 */

/** Semantic severities, canonical display order. */
export const SEVERITIES = [
  'primary',
  'secondary',
  'base',
  'info',
  'success',
  'warning',
  'danger',
] as const;

export type Severity = (typeof SEVERITIES)[number];

/** Visual shades, default/medium excluded (they are the implicit rest). */
export const SHADES: Exclude<ButtonShade, 'default' | 'medium'>[] = [
  'lighter',
  'light',
  'dark',
  'darker',
];

export type Shade = (typeof SHADES)[number];

/** Core interaction variants, canonical display order. */
export const VARIANTS: ButtonVariant[] = ['filled', 'flat', 'outlined', 'text'];

export type Variant = ButtonVariant;

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
