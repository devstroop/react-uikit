import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Gap API ratchet: `gap`/`rowGap` accept px numbers and CSS lengths
 * (Radzen Gap parity) — the xs|sm|md|lg|xl token vocabulary was removed
 * as a breaking change (see CHANGELOG). These sources must never carry
 * a tier token on a gap prop again; token values silently pass through
 * `resolveGap` as invalid CSS and render a zero gap.
 */

const TIER_ATTR =
  /\b(?:rowGap|gap)=(?:"(?:xs|sm|md|lg|xl)"|\{\s*['"](?:xs|sm|md|lg|xl)['"]\s*\})/;

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === 'dist') continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.tsx?$/.test(entry)) out.push(path);
  }
  return out;
}

describe('numeric gap API', () => {
  it('never reintroduces xs–xl tier tokens on gap/rowGap', () => {
    const offenders: string[] = [];
    for (const file of [...walk('preview'), ...walk('lib')]) {
      const lines = readFileSync(file, 'utf8').split('\n');
      lines.forEach((line, i) => {
        if (TIER_ATTR.test(line))
          offenders.push(`${file}:${i + 1}: ${line.trim()}`);
      });
    }
    expect(offenders).toEqual([]);
  });
});
