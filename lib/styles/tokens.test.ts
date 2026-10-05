import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { basename, dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'tokens.css'),
  'utf8'
);

const HUES = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'base',
  'dark',
] as const;
const STEPS = ['lighter', 'light', 'dark', 'darker'] as const;
const HEX = /^#[0-9a-f]{6}$/;
const HEX_IN_CSS = '#[0-9a-f]{6}';
// Shade-ramps are derived, never hardcoded: each fill step mixes its hue
// base toward white/black in sRGB (lighter 45% white, light 30% white,
// dark 15% black, darker 30% black), so re-seeded or mode-tuned bases
// keep matching ramps automatically.
const DERIVED_IN_CSS =
  'color-mix\\(\\s*in srgb,\\s*var\\(--dx-[a-z]+-color\\) [0-9]+%,\\s*(?:white|black)\\s*\\)';
const DERIVED_STEPS: Record<(typeof STEPS)[number], string> = {
  lighter: 'color-mix(in srgb, var(--dx-HUE-color) 55%, white)',
  light: 'color-mix(in srgb, var(--dx-HUE-color) 70%, white)',
  dark: 'color-mix(in srgb, var(--dx-HUE-color) 85%, black)',
  darker: 'color-mix(in srgb, var(--dx-HUE-color) 70%, black)',
};
const normalize = (value: string): string =>
  value.replace(/\s+/g, ' ').replace('( ', '(').replace(' )', ')');

describe('shade ramp tokens', () => {
  it.each(HUES)(
    'defines all four --dx-{hue}-{step}-color fill steps',
    (hue) => {
      for (const step of STEPS) {
        expect(css).toContain(`--dx-${hue}-${step}-color:`);
      }
    }
  );

  it('defines each fill step in all three theme blocks (light, dark, OS fallback)', () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const pattern =
          hue === 'light' || hue === 'base' || hue === 'dark'
            ? `--dx-${hue}-${step}-color:\\s*${HEX_IN_CSS};`
            : `--dx-${hue}-${step}-color:\\s*${DERIVED_IN_CSS};`;
        const matches = css.match(new RegExp(pattern, 'g'));
        expect(matches, `${hue}-${step}`).toHaveLength(3);
      }
    }
  });

  it('uses valid values for every ramp step (hex tonals, derived hues)', () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const values = [
          ...css.matchAll(
            new RegExp(`--dx-${hue}-${step}-color:\\s*([^;]+);`, 'g')
          ),
        ].map((m) => (m[1] ?? '').trim());
        expect(values.length).toBeGreaterThan(0);
        for (const value of values) {
          if (hue === 'light' || hue === 'base' || hue === 'dark') {
            expect(value, `${hue}-${step}`).toMatch(HEX);
          } else {
            expect(normalize(value), `${hue}-${step}`).toBe(
              DERIVED_STEPS[step].replaceAll('HUE', hue)
            );
          }
        }
      }
    }
  });

  it('completes the border/outline families with lighter+dark steps', () => {
    for (const hue of [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'danger',
    ] as const) {
      for (const role of ['border', 'outline'] as const) {
        for (const step of ['lighter', 'dark'] as const) {
          const matches = css.match(
            new RegExp(
              `--dx-${role}-${hue}-${step}-color:\\s*${HEX_IN_CSS};`,
              'g'
            )
          );
          expect(matches, `${role}-${hue}-${step}`).toHaveLength(3);
        }
      }
    }
  });

  it('defines on-* foreground aliases for every step in all three theme blocks', () => {
    for (const hue of HUES) {
      for (const step of STEPS) {
        const matches = css.match(
          new RegExp(`--dx-on-${hue}-${step}-color:\\s*var\\([^;]+\\);`, 'g')
        );
        expect(matches, `on-${hue}-${step}`).toHaveLength(3);
      }
    }
  });

  it('points every on-* alias at an existing token', () => {
    const defined = new Set(
      [...css.matchAll(/--dx-[a-z0-9-]+(?=:)/g)].map((m) => m[0])
    );
    for (const m of css.matchAll(
      /--dx-on-[a-z]+-(?:lighter|light|dark|darker)-color:\s*var\((--dx-[a-z-]+-color)\)/g
    )) {
      const target = m[1] ?? '';
      expect(defined.has(target), target).toBe(true);
    }
  });
});

describe('foundation tokens', () => {
  it('defines geometry and interaction constants', () => {
    for (const [token, value] of [
      ['--dx-border-width', '1px'],
      ['--dx-border-width-strong', '2px'],
      ['--dx-outlined-border-width', '1px'],
      ['--dx-focus-ring-width', '2px'],
      ['--dx-focus-ring-offset', '2px'],
      ['--dx-disabled-opacity', '0.55'],
      ['--dx-backdrop-color', 'rgb(66 66 66 / 0.5)'],
      ['--dx-scrollbar-color', 'var(--dx-secondary-color)'],
      ['--dx-scrollbar-size', '12px'],
      ['--dx-field-height-xs', '34px'],
      ['--dx-field-height-sm', '42px'],
      ['--dx-field-height-md', '50px'],
      ['--dx-field-height-lg', '58px'],
      ['--dx-field-height-xl', '66px'],
      ['--dx-field-padding-xs', '12px 12px 4px'],
      ['--dx-field-padding-sm', '16px 12px 4px'],
      ['--dx-field-padding-md', '20px 12px 6px'],
      ['--dx-field-padding-lg', '24px 12px 8px'],
      ['--dx-field-padding-xl', '28px 12px 8px'],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
  });

  it('composes border shorthands from width + color and bans --dx-outline-width (#43)', () => {
    // Radzen --rz-border-{color} parity: components write
    // `border: var(--dx-border)` and never a numeric width.
    for (const [token, value] of [
      ['--dx-border', 'var(--dx-border-width) solid var(--dx-border-color)'],
      [
        '--dx-border-strong',
        'var(--dx-border-width) solid var(--dx-border-strong-color)',
      ],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
    // Focus width lives on --dx-focus-ring-width only; the old mis-named
    // 1px outline token made focus rings theme-dependent. Never bring it back.
    expect(css).not.toContain('--dx-outline-width');
  });

  it('never reintroduces raw thickness literals (#43)', () => {
    // Thickness is tokenized: borders → var(--dx-border) /
    // var(--dx-border-width), indicators → var(--dx-border-width-strong),
    // focus → var(--dx-focus-ring-width) + var(--dx-focus-ring-offset).
    // Documented exceptions (stripped before scanning):
    const ALLOWED = [
      // scrollbar gutter ring — structural, painted fully transparent
      /border: 4px solid rgba\(0, 0, 0, 0\);/g,
      // inset focus variants keep negative offsets (Radzen ships the same)
      /outline-offset: -\d+px;/g,
    ];
    const BAN: Array<[label: string, re: RegExp]> = [
      [
        'raw border width (use var(--dx-border) or var(--dx-border-width))',
        /(^|[;{])\s*border(-(top|right|bottom|left|inline|block|inline-start|inline-end|block-start|block-end))?:\s*(?!0\s*;)\d/gm,
      ],
      [
        'raw border-width longhand (use a width token)',
        /(^|[;{])\s*border-width:\s*\d/gm,
      ],
      [
        'raw outline width (use var(--dx-focus-ring-width))',
        /(^|[;{])\s*outline:\s*\d/gm,
      ],
      [
        'raw outline offset (use var(--dx-focus-ring-offset))',
        /(^|[;{])\s*outline-offset:\s*(?!-)\d/gm,
      ],
      [
        'raw focus ring spread (use var(--dx-focus-ring-width))',
        /(^|[;{])\s*box-shadow:[^;]*0 0 0 \d/gm,
      ],
      [
        'raw inline border px in style objects (use the width tokens)',
        /border(-(top|right|bottom|left))?:\s*['"`][^'"`;\n]*\d+(\.\d+)?px/g,
      ],
      [
        'raw inline outline/ring px in style objects',
        /(outline|boxShadow):\s*['"`][^'"`;\n]*0 0 0 \d+(\.\d+)?px/g,
      ],
    ];
    const here = dirname(fileURLToPath(import.meta.url));
    const stripComments = (text: string) =>
      text.replace(/\/\*[\s\S]*?\*\//g, '');
    const sources: Array<[where: string, text: string]> = [];
    const walk = (dir: string, tag: string, exts: RegExp) => {
      for (const file of readdirSync(dir, { recursive: true })) {
        const rel = String(file);
        if (!exts.test(rel)) continue;
        sources.push([
          `${tag}/${rel}`,
          stripComments(readFileSync(join(dir, rel), 'utf8')),
        ]);
      }
    };
    const libDir = join(here, '..');
    walk(libDir, 'lib', /\.css$/); // components + utilities + tokens
    walk(join(here, '..', '..', 'preview'), 'preview', /\.tsx?$/);
    expect(sources.length).toBeGreaterThan(100); // sanity: the walk found the tree
    for (const [where, raw] of sources) {
      let text = raw;
      for (const allowed of ALLOWED) text = text.replace(allowed, '');
      for (const [label, re] of BAN) {
        re.lastIndex = 0;
        const hit = re.exec(text);
        if (hit) {
          const snippet = hit[0].trim().slice(0, 80);
          throw new Error(`${where}: ${label} — \`${snippet}\``);
        }
      }
    }
  });

  it('defines the radius scale in all three theme blocks (light, dark, OS fallback)', () => {
    // One Radzen-style scale: 4px base + 0.25rem rungs 0..10 + pill full,
    // generated identically into every theme block (#40).
    const scale = [
      '--dx-radius: 4px',
      '--dx-radius-0: 0',
      '--dx-radius-1: 0.25rem',
      '--dx-radius-2: 0.5rem',
      '--dx-radius-3: 0.75rem',
      '--dx-radius-4: 1rem',
      '--dx-radius-5: 1.25rem',
      '--dx-radius-6: 1.5rem',
      '--dx-radius-7: 1.75rem',
      '--dx-radius-8: 2rem',
      '--dx-radius-9: 2.25rem',
      '--dx-radius-10: 2.5rem',
      '--dx-radius-full: 9999px',
    ];
    for (const def of scale) {
      const re = new RegExp(`${def.replace(/\./g, '\\.')};`, 'g');
      expect(css.match(re), def).toHaveLength(3);
    }
  });

  it('derives radius roles from scale rungs (Radzen derivation parity)', () => {
    // Geometry families: components consume roles, never raw rungs —
    // a theme retunes by re-pointing a role (#40).
    for (const [token, value] of [
      ['--dx-radius-input', 'var(--dx-radius-2)'],
      ['--dx-radius-button', 'var(--dx-radius-full)'],
      ['--dx-radius-checkbox', 'var(--dx-radius-1)'],
      ['--dx-radius-surface', 'var(--dx-radius-3)'],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
  });

  it('never reintroduces tier radius tokens (xs/sm/md/lg/xl)', () => {
    expect(css).not.toMatch(/--dx-radius-(xs|sm|md|lg|xl)(?![-a-z0-9])/);
  });

  it('never consumes a component alias outside its own role (#40)', () => {
    const ROLE_OWNERS: Record<string, string[]> = {
      '--dx-radius-input': [
        'AutoComplete',
        'ColorPicker',
        'DatePicker',
        'DropZone',
        'DropDown',
        'FormField',
        'ListBox',
        'Mask',
        'Numeric',
        'Password',
        'Select',
        'SignaturePad',
        'TextBox',
        'TextArea',
        'TimeSpanPicker',
        'Upload',
      ],
      '--dx-radius-button': [
        'Button',
        'FabMenu',
        'Password',
        'SidebarToggle',
        'Tabs',
      ],
      '--dx-radius-checkbox': ['CheckBox', 'CheckBoxList'],
      '--dx-radius-surface': ['Card', 'Dialog', 'display'],
    };
    const componentsDir = join(
      dirname(fileURLToPath(import.meta.url)),
      '..',
      'components'
    );
    const sources: Array<[owner: string, text: string]> = readdirSync(
      componentsDir,
      { recursive: true }
    )
      .filter((f) => String(f).endsWith('.module.css'))
      .map((f) => [
        basename(String(f), '.module.css'),
        readFileSync(join(componentsDir, String(f)), 'utf8'),
      ]);
    sources.push([
      'display',
      readFileSync(
        join(
          dirname(fileURLToPath(import.meta.url)),
          '..',
          '..',
          'preview',
          'pages',
          'display.tsx'
        ),
        'utf8'
      ),
    ]);
    for (const [role, owners] of Object.entries(ROLE_OWNERS)) {
      const needle = `var(${role})`;
      for (const [owner, text] of sources) {
        if (text.includes(needle)) {
          expect(owners.includes(owner), `${owner} consumes ${role}`).toBe(
            true
          );
        }
      }
    }
  });

  it('defines the leading scale with exact in-use values', () => {
    for (const [token, value] of [
      ['--dx-leading-none', '1'],
      ['--dx-leading-tight', '1.25'],
      ['--dx-leading-snug', '1.3'],
      ['--dx-leading-normal', '1.35'],
      ['--dx-leading-relaxed', '1.4'],
      ['--dx-leading-text', '1.429'],
      ['--dx-leading-body', '1.5'],
      ['--dx-leading-loose', '1.6'],
    ]) {
      expect(css, token).toContain(`${token}: ${value};`);
    }
  });

  it('defines letterspacing extras and link aliases', () => {
    expect(css).toContain('--dx-letterspacing-button: 0.25px;');
    expect(css).toContain('--dx-letterspacing-wide: 0.04em;');
    expect(css).toContain('--dx-link-color: var(--dx-primary-color);');
    expect(css).toContain(
      '--dx-link-hover-color: var(--dx-primary-hover-color);'
    );
  });

  it('defines layout chrome tokens', () => {
    expect(css).toContain('--dx-z-sticky: 100;');
    expect(css).toContain('--dx-layout-sidebar-width: 240px;');
    expect(css).toContain('--dx-z-drawer-scrim: 150;');
    expect(css).toContain('--dx-z-drawer: 200;');
    expect(css).toContain('--dx-z-drawer-toggle: 250;');
  });

  it('self-hosts the Source Sans 3 variable fonts with swap', () => {
    // Quote style follows the repo prettier config (single quotes).
    expect(css).toContain("font-family: 'Source Sans 3';");
    expect(css).toContain("url('./fonts/SourceSans3VF-Upright.ttf.woff2')");
    expect(css).toContain("url('./fonts/SourceSans3VF-Italic.ttf.woff2')");
    expect(css).toContain('font-display: swap;');
    expect(css).toContain('font-weight: 100 900;');
  });

  it('keeps deprecated abbreviated aliases pointing at the new names', () => {
    expect(css).toContain('--dx-bg-color: var(--dx-background-color);');
    for (const tone of [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'base',
      'dark',
      'neutral',
      'soft',
    ]) {
      expect(css, tone).toContain(
        `--dx-${tone}-fg-color: var(--dx-on-${tone}-color);`
      );
    }
  });

  it('keeps deprecated full-length foreground names pointing at on-*', () => {
    for (const tone of [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'base',
      'dark',
      'neutral',
      'soft',
    ]) {
      expect(css, tone).toContain(
        `--dx-${tone}-foreground-color: var(--dx-on-${tone}-color);`
      );
    }
  });

  it('defines on-* tone foregrounds in all three theme blocks', () => {
    for (const tone of [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'base',
      'dark',
      'neutral',
      'soft',
    ]) {
      const matches = css.match(
        new RegExp(`--dx-on-${tone}-color:\\s*#[0-9a-f]{6};`, 'g')
      );
      expect(matches, `on-${tone}`).toHaveLength(3);
    }
  });
});
