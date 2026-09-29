import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Token-architecture ratchets (see docs/THEMING.md).
 *
 * The dark-link defect: --dx-link-color was hardcoded hex tuned for
 * the stock blue ramp, so any re-seeded primary silently inherited a
 * foreign link color. Text-level tokens must therefore satisfy two
 * properties in EVERY theme block (light :root, explicit dark,
 * OS-dark fallback):
 *  1. readability — bare-hex pairs keep >= 4.5:1 contrast;
 *  2. derivation — non-hex values must reference the ramp (var() or
 *     color-mix()), never a hardcoded sibling hex.
 * Either property failing means a themed consumer renders wrong.
 */

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'tokens.css'),
  'utf8'
);

// All patterns anchor to line start: the specificity comment above
// the dark block quotes `:root[data-theme="dark"] { … }` verbatim,
// and an unanchored first-match would extract the comment, not the
// block (every value lookup then throws).
function extractBlock(startPattern: RegExp): string {
  const anchored = new RegExp(`^\\s*${startPattern.source}`, 'm');
  const m = anchored.exec(css);
  expect(m, String(startPattern)).not.toBeNull();
  const open = css.indexOf('{', m!.index);
  let depth = 0;
  for (let j = open; j < css.length; j++) {
    if (css[j] === '{') depth++;
    if (css[j] === '}') {
      depth--;
      if (depth === 0) return css.slice(open + 1, j);
    }
  }
  throw new Error(`unbalanced braces after ${startPattern}`);
}

const BLOCKS: Record<string, string> = {
  light: extractBlock(/:root\s*\{/),
  dark: extractBlock(/:root\[data-theme=['"]dark['"]\]\s*\{/),
  'os-dark': extractBlock(/:where\(:root\):not\(\[data-theme\]\)\s*\{/),
};

function value(block: string, name: string): string {
  const m = block.match(new RegExp(`--dx-${name}:\\s*([^;]+);`));
  expect(m, name).not.toBeNull();
  return (m![1] ?? '').trim();
}

const HEX = /^#[0-9a-f]{6}$/i;
const DERIVED = /var\(|color-mix\(/;

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const f = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function ratio(a: string, b: string): number {
  const hi = Math.max(luminance(a), luminance(b));
  const lo = Math.min(luminance(a), luminance(b));
  return (hi + 0.05) / (lo + 0.05);
}

/** Foreground roles that must stay readable on their surfaces. */
const TEXT_PAIRS: Array<[fg: string, bg: string]> = [
  ['text-color', 'background-color'],
  ['text-muted-color', 'background-color'],
  ['text-color', 'surface-color'],
  ['link-color', 'background-color'],
  ['link-hover-color', 'background-color'],
  ['on-primary-color', 'primary-color'],
  ['on-danger-color', 'danger-color'],
  ['on-success-color', 'success-color'],
  ['on-warning-color', 'warning-color'],
  ['on-info-color', 'info-color'],
];

describe('token contrast + derivation', () => {
  it.each(Object.keys(BLOCKS))(
    'resolves every text-level pair in the %s block',
    (blockName) => {
      const block = BLOCKS[blockName]!;
      for (const [fg, bg] of TEXT_PAIRS) {
        const f = value(block, fg);
        const g = value(block, bg);
        if (HEX.test(f) && HEX.test(g)) {
          expect(ratio(f, g), `${blockName} ${fg}/${bg}`).toBeGreaterThanOrEqual(
            4.5
          );
        } else {
          // A non-hex foreground must derive from the ramp — a
          // hardcoded sibling hex here is the dark-link defect
          // recurring. (Backgrounds legitimately stay fixed hex.)
          expect(f, `${blockName} ${fg}`).toMatch(DERIVED);
        }
      }
    }
  );

  it('derives link color from the ramp (never hardcoded hex)', () => {
    for (const [blockName, block] of Object.entries(BLOCKS)) {
      for (const name of ['link-color', 'link-hover-color']) {
        const v = value(block, name);
        expect(
          HEX.test(v) ? 'bare-hex' : 'derived',
          `${blockName} ${name} got ${v}`
        ).toBe('derived');
      }
    }
  });
});
