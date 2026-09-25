import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'utilities.css'),
  'utf8'
);

const TONES: Record<string, string> = {
  default: '--dx-text-color',
  muted: '--dx-text-muted-color',
  primary: '--dx-text-primary-color',
  success: '--dx-text-success-color',
  warning: '--dx-text-warning-color',
  danger: '--dx-text-danger-color',
  info: '--dx-text-info-color',
};

describe('text color utilities', () => {
  it.each(Object.keys(TONES))(
    'defines .dx-text-%s against its text role',
    (tone) => {
      const matches = css.match(
        new RegExp(`\\.dx-text-${tone} \\{ color: var\\(${TONES[tone]}\\)`, 'g')
      );
      expect(matches, tone).toHaveLength(1);
    }
  );

  it('keeps text utilities forceful so they beat component colors', () => {
    for (const tone of Object.keys(TONES)) {
      expect(css).toContain(
        `.dx-text-${tone} { color: var(${TONES[tone]}) !important; }`
      );
    }
  });
});
