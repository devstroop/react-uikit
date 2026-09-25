import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const HERE = dirname(fileURLToPath(import.meta.url));
const REACT_CSS = readFileSync(join(HERE, '..', '..', 'utilities.css'), 'utf8');
const REACT_TOKENS = readFileSync(
  join(HERE, '..', '..', 'styles', 'tokens.css'),
  'utf8'
);
let HTMX_CSS: string | null = null;
try {
  const ROOT = join(HERE, '..', '..', '..', '..', '..');
  HTMX_CSS = readFileSync(
    join(
      ROOT,
      'frameworks',
      'htmx',
      'lib',
      'components',
      'utilities',
      'utilities.css'
    ),
    'utf8'
  );
} catch {
  // htmx framework not present in this workspace (e.g. WaServer checkout) — skip parity checks
  HTMX_CSS = null;
}

const selectors = (css: string) =>
  new Set([...css.matchAll(/\.dx-[a-z0-9-]+/g)].map((m) => m[0]).sort());

const SPACING_VARS = [
  'var(--dx-space-0)',
  'var(--dx-space-05)',
  'var(--dx-space-1)',
  'var(--dx-space-2)',
  'var(--dx-space-3)',
  'var(--dx-space-4)',
  'var(--dx-space-5)',
  'var(--dx-space-6)',
  'var(--dx-space-7)',
  'var(--dx-space-8)',
  'var(--dx-space-9)',
  'var(--dx-space-10)',
  'var(--dx-space-11)',
  'var(--dx-space-12)',
];

describe('Utilities parity (#75)', () => {
  it('react ships the identical utility class surface as htmx', () => {
    if (HTMX_CSS === null) return;
    expect(selectors(REACT_CSS)).toEqual(selectors(HTMX_CSS!));
  });

  it('covers the Radzen utility families with breakpoint suffixes', () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      '.dx-display-flex',
      '.dx-display-md-block',
      '.dx-justify-content-space-between',
      '.dx-justify-content-lg-center',
      '.dx-align-items-center',
      '.dx-align-items-xl-start',
      '.dx-overflow-auto',
      '.dx-overflow-xx-scroll',
      '.dx-w-50',
      '.dx-w-sm-100',
      '.dx-w-25',
      '.dx-w-75',
      '.dx-w-100',
      '.dx-w-auto',
      '.dx-w-fit-content',
      '.dx-w-min-content',
      '.dx-w-max-content',
      '.dx-w-stretch',
      '.dx-w-xs-auto',
      '.dx-min-w-25',
      '.dx-min-w-75',
      '.dx-max-w-100',
      '.dx-vw-25',
      '.dx-vw-100',
      '.dx-h-25',
      '.dx-h-50',
      '.dx-h-100',
      '.dx-h-auto',
      '.dx-min-h-25',
      '.dx-max-h-xx-50',
      '.dx-vh-25',
      '.dx-vh-100',
      '.dx-shadow-0',
      '.dx-shadow-5',
      '.dx-shadow-10',
      '.dx-ripple',
      '.dx-text-align-center',
      '.dx-text-align-md-center',
      '.dx-text-align-justify',
      '.dx-text-wrap',
      '.dx-text-nowrap',
      '.dx-text-truncate',
      '.dx-text-uppercase',
      '.dx-text-primary-lighter',
      '.dx-text-on-info-light',
      '.dx-background-info-lighter',
      '.dx-background-danger',
      '.dx-border-info-light',
      '.dx-border-primary-dark',
      '.dx-border-success',
      '.dx-radius-md',
      '.dx-flex-row',
    ]) {
      expect(set.has(cls), `missing ${cls}`).toBe(true);
    }
  });

  it('uses Radzen breakpoint values (xs 576 … xx 2560)', () => {
    if (HTMX_CSS === null) return;
    for (const px of [576, 768, 1024, 1280, 1920, 2560]) {
      expect(HTMX_CSS!, `missing ${px}px media query`).toContain(
        `(min-width: ${px}px)`
      );
    }
  });

  it('ships the full spacing scale (margin + padding, all sides/axes) (#79)', () => {
    const set = selectors(REACT_CSS);
    for (const cls of [
      '.dx-m-0',
      '.dx-m-05',
      '.dx-m-1',
      '.dx-m-4',
      '.dx-m-12',
      '.dx-m-auto',
      '.dx-mx-2',
      '.dx-mx-auto',
      '.dx-my-6',
      '.dx-mt-3',
      '.dx-mr-8',
      '.dx-mb-12',
      '.dx-ml-05',
      '.dx-ms-4',
      '.dx-me-4',
      '.dx-p-0',
      '.dx-p-05',
      '.dx-p-3',
      '.dx-p-12',
      '.dx-px-1',
      '.dx-py-2',
      '.dx-pt-5',
      '.dx-pr-6',
      '.dx-pb-7',
      '.dx-pl-8',
      '.dx-ps-2',
      '.dx-pe-2',
      '.dx-m-md-4',
      '.dx-mt-lg-6',
      '.dx-p-xl-3',
      '.dx-pb-xx-2',
    ]) {
      expect(set.has(cls), `missing ${cls}`).toBe(true);
    }
  });

  it('resolves spacing from the space tier tokens (#79)', () => {
    for (const [size, px] of [
      ['0', '0px'],
      ['05', '2px'],
      ['1', '4px'],
      ['5', '20px'],
      ['6', '24px'],
      ['12', '48px'],
    ]) {
      const v = `var(--dx-space-${size})`;
      expect(SPACING_VARS, `space.${size} in surface`).toContain(v);
      expect(REACT_CSS, `reference space.${size}`).toContain(v);
      expect(REACT_TOKENS, `definition --dx-space-${size}`).toContain(
        `--dx-space-${size}: ${px}`
      );
    }
    expect(REACT_CSS).toContain('.dx-m-auto { margin: auto !important; }');
    expect(REACT_CSS).toContain('@media (min-width: 1024px) {');
  });

  it('ships the Radzen shadow scale as tokens and utilities (0–10)', () => {
    for (let n = 0; n <= 10; n++) {
      expect(REACT_TOKENS, `definition --dx-shadow-${n}`).toContain(
        `--dx-shadow-${n}:`
      );
      expect(REACT_CSS, `utility .dx-shadow-${n}`).toContain(
        `.dx-shadow-${n} { box-shadow: var(--dx-shadow-${n}) !important; }`
      );
    }
    expect(REACT_TOKENS).toContain('--dx-shadow-0: none;');
  });

  it('ships the Radzen ripple press feedback as .dx-ripple', () => {
    expect(REACT_CSS).toContain(
      '.dx-ripple { position: relative; overflow: hidden; }'
    );
    expect(REACT_CSS).toContain('.dx-ripple:active::before');
    expect(REACT_CSS).toContain('opacity: 0.32;');
    expect(REACT_CSS).toContain(
      'radial-gradient(circle, currentColor 1%, transparent 1%)'
    );
    expect(REACT_CSS).toContain('var(--dx-ripple-duration, 0.8s)');
    expect(REACT_TOKENS).toContain('--dx-ripple-duration: 0.8s;');
    expect(REACT_CSS).toContain('prefers-reduced-motion');
  });

  it('ships Radzen text-align / wrap / transform utilities', () => {
    expect(REACT_CSS).toContain(
      '.dx-text-align-center { text-align: center; }'
    );
    expect(REACT_CSS).toContain(
      '.dx-text-align-md-center { text-align: center !important; }'
    );
    expect(REACT_CSS).toContain(
      '.dx-text-wrap { white-space: normal !important; }'
    );
    expect(REACT_CSS).toContain(
      '.dx-text-nowrap { white-space: nowrap !important; }'
    );
    expect(REACT_CSS).toContain('.dx-text-truncate { overflow: hidden;');
    expect(REACT_CSS).toContain(
      '.dx-text-uppercase { text-transform: uppercase; }'
    );
  });

  it('maps the tone color matrix onto dx roles', () => {
    for (const tone of [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
    ]) {
      for (const shade of ['lighter', 'light', 'dark', 'darker']) {
        expect(REACT_CSS, `text ${tone} ${shade}`).toContain(
          `.dx-text-${tone}-${shade} { color: var(--dx-${tone}-${shade}-color) !important; }`
        );
        expect(REACT_CSS, `background ${tone} ${shade}`).toContain(
          `.dx-background-${tone}-${shade} { background-color: var(--dx-${tone}-${shade}-color) !important; }`
        );
        expect(REACT_CSS, `on ${tone} ${shade}`).toContain(
          `.dx-text-on-${tone}-${shade} { color: var(--dx-on-${tone}-${shade}-color) !important; }`
        );
      }
    }
    expect(REACT_CSS).toContain(
      '.dx-background-warning { background-color: var(--dx-warn-container-color) !important; }'
    );
    expect(REACT_CSS).toContain(
      '.dx-background-danger { background-color: var(--dx-error-container-color) !important; }'
    );
    for (const tone of [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
    ]) {
      expect(REACT_CSS, `border ${tone}`).toContain(
        `.dx-border-${tone} { border-color: var(--dx-border-${tone}-color) !important; }`
      );
      for (const shade of ['lighter', 'light', 'dark', 'darker']) {
        expect(REACT_CSS, `border ${tone} ${shade}`).toContain(
          `.dx-border-${tone}-${shade} { border-color: var(--dx-border-${tone}-${shade}-color) !important; }`
        );
      }
    }
  });

  it('ships radius and flex-direction raw utilities', () => {
    for (const tier of ['xs', 'sm', 'md', 'lg', 'xl', 'full']) {
      expect(REACT_CSS, `radius ${tier}`).toContain(
        `.dx-radius-${tier} { border-radius: var(--dx-radius-${tier}) !important; }`
      );
    }
    for (const [cls, value] of [
      ['row', 'row'],
      ['row-reverse', 'row-reverse'],
      ['column', 'column'],
      ['column-reverse', 'column-reverse'],
    ]) {
      expect(REACT_CSS, `flex ${cls}`).toContain(
        `.dx-flex-${cls} { flex-direction: ${value} !important; }`
      );
    }
  });
});
