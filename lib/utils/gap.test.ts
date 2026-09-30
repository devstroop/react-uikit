import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { resolveGap } from './gap';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');

describe('resolveGap', () => {
  it('turns unitless numbers into px', () => {
    expect(resolveGap(8)).toBe('8px');
    expect(resolveGap(20)).toBe('20px');
  });

  it('treats digits-only strings as px (Radzen Gap parity)', () => {
    expect(resolveGap('16')).toBe('16px');
    expect(resolveGap('0')).toBe('0px');
  });

  it('passes CSS lengths through verbatim', () => {
    expect(resolveGap('0.5rem')).toBe('0.5rem');
    expect(resolveGap('2em')).toBe('2em');
    expect(resolveGap('16px')).toBe('16px');
    expect(resolveGap('calc(1rem + 2px)')).toBe('calc(1rem + 2px)');
  });
});

/**
 * Numeric-gap ratchet: `gap`/`rowGap` accept px numbers and CSS lengths
 * (Radzen Gap parity); the xs|sm|md|lg|xl token vocabulary was removed as
 * a breaking change (CHANGELOG). The props are typed `number | string`,
 * so a tier string is not a type error — it survives `resolveGap`
 * untouched, lands in the style object as invalid CSS, and silently
 * renders a zero gap. Scan the sources that author gap values and fail
 * if a tier ever returns.
 */
describe('gap tier vocabulary (source ratchet)', () => {
  // JSX: gap="sm" | rowGap={'sm'}. The lookbehind keeps attribute
  // names like data-gap= out of the match.
  const JSX_TIER =
    /(?<![-\w])(?:rowGap|gap)=(?:"(?:xs|sm|md|lg|xl)"|\{\s*['"](?:xs|sm|md|lg|xl)['"]\s*\})/;
  // Style objects: { gap: 'sm' }. CSS never quotes its values, so the
  // required quotes keep real stylesheets out of the match.
  const STYLE_TIER = /(?<![-\w])(?:rowGap|gap):\s*['"](?:xs|sm|md|lg|xl)['"]/;

  const walk = (dir: string, out: string[] = []): string[] => {
    for (const entry of readdirSync(dir)) {
      if (entry === 'node_modules' || entry === 'dist') continue;
      const path = join(dir, entry);
      if (statSync(path).isDirectory()) walk(path, out);
      else if (/\.tsx?$/.test(entry)) out.push(path);
    }
    return out;
  };

  it('never reintroduces xs–xl tier tokens on gap/rowGap values', () => {
    const offenders: string[] = [];
    // This file's own doc comments contain literal tier examples — the
    // scanner skips itself so the pattern can stay self-describing.
    const self = fileURLToPath(import.meta.url);
    const files = [
      ...walk(join(ROOT, 'lib')),
      ...walk(join(ROOT, 'preview')),
    ].filter((file) => file !== self);
    expect(files.length, 'source trees resolved').toBeGreaterThan(50);
    for (const file of files) {
      readFileSync(file, 'utf8')
        .split('\n')
        .forEach((line, index) => {
          if (JSX_TIER.test(line) || STYLE_TIER.test(line)) {
            offenders.push(
              `${relative(ROOT, file)}:${index + 1}: ${line.trim()}`
            );
          }
        });
    }
    expect(offenders).toEqual([]);
  });
});
