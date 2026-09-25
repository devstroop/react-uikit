import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

const HERE = dirname(fileURLToPath(import.meta.url));
const css = (name: string) =>
  readFileSync(join(HERE, 'components', name, `${name}.module.css`), 'utf8');

const SCOPE = [
  'Button',
  'Card',
  'Text',
  'Input',
  'Dialog',
  'Table',
  'Alert',
  'Pager',
  'Badge',
  'Splitbutton',
  'Selectbar',
] as const;

describe('component namespaces (Radzen parity pilot)', () => {
  it('exposes Button/Input/Dialog/Alert geometry hooks with exact defaults', () => {
    expect(css('Button')).toContain('--dx-button-padding-md: 0 16px;');
    expect(css('Button')).toContain('padding: var(--dx-button-padding-md);');
    expect(css('Input')).toContain('--dx-input-padding-md: 8px 12px;');
    expect(css('Input')).toContain('padding: var(--dx-input-padding-md);');
    expect(css('Dialog')).toContain('--dx-dialog-width-md: 520px;');
    expect(css('Dialog')).toContain('max-width: var(--dx-dialog-width-md);');
    expect(css('Dialog')).toContain('--dx-dialog-close-size: 28px;');
    expect(css('Alert')).toContain('--dx-alert-dismiss-size-md: 22px;');
    expect(css('Alert')).toContain(
      '--alert-dismiss-size: var(--dx-alert-dismiss-size-md);'
    );
  });

  it('exposes Badge padding hooks and a shared outlined width', () => {
    expect(css('Badge')).toContain('--dx-badge-padding-md: 1px 8px;');
    expect(css('Badge')).toContain('padding: var(--dx-badge-padding-md);');
    for (const name of ['Button', 'Alert'] as const) {
      expect(css(name), `${name} outlined width`).toContain(
        'border-width: var(--dx-outlined-border-width);'
      );
    }
    expect(css('Badge')).toContain(
      'border: var(--dx-outlined-border-width) solid var(--dx-border-strong-color);'
    );
    expect(css('Card')).toContain(
      'border: var(--dx-outlined-border-width) solid var(--dx-border-color);'
    );
    expect(css('Splitbutton')).toContain('border-width: var(--dx-outlined-border-width);');
  });

  it('keeps no bare border/opacity/focus-ring literals in the pilot scope', () => {
    for (const name of SCOPE) {
      const content = css(name);
      expect(content, `${name} bare 1px border`).not.toMatch(
        /border(-[a-z]+)?: 1px solid/
      );
      expect(content, `${name} bare disabled opacity`).not.toContain(
        'opacity: 0.55;'
      );
      expect(content, `${name} bare focus spread`).not.toContain('0 0 0 3px');
      expect(content, `${name} bare outline width`).not.toMatch(
        /outline: 2px solid/
      );
    }
  });

  it('drives type metrics off the leading/letterspacing tokens', () => {
    expect(css('Text')).not.toMatch(/line-height: 1(\.\d+)?;/);
    expect(css('Text')).toContain('var(--dx-leading-body)');
    expect(css('Text')).toContain('var(--dx-letterspacing-button)');
    expect(css('Table')).toContain('var(--dx-letterspacing-wide)');
    expect(css('Dialog')).toContain('var(--dx-leading-loose)');
  });

  it('keeps native dialog centering against UA-margin resets', () => {
    // Resets like Tailwind preflight zero the UA margin:auto that
    // centers showModal() dialogs; without this they stick to
    // inline-start.
    expect(css('Dialog')).toMatch(/\.dialog\s*{[^}]*margin:\s*auto;/);
  });

  it('sizes dialogs by content with edge-to-edge internal scroll', () => {
    const dialog = css('Dialog');
    // No fixed height binding: shell flexes to content, capped only by
    // the screen edge — 100vh baseline, 100dvh behind @supports (a bare
    // var() line cannot be the fallback: it resolves at computed-value
    // time, so pre-dvh browsers would drop to `none`).
    expect(dialog).toContain('--dx-dialog-max-height: 100dvh;');
    expect(dialog).toContain('max-height: 100vh;');
    expect(dialog).toContain('@supports (max-height: 100dvh)');
    expect(dialog).toContain('max-height: var(--dx-dialog-max-height);');
    // The old min(85vh, 720px) height cap is gone (720px survives only
    // as the lg *width* tier default).
    expect(dialog).not.toContain('85vh');
    // Outer shell clips to the radius and never scrolls; the body owns
    // scrolling so scrollbars stay inside the rounded layer.
    expect(dialog).toMatch(/\.dialog\s*{[^}]*overflow:\s*hidden;/);
    expect(dialog).toMatch(/\.body\s*{[^}]*overflow:\s*auto;/);
    expect(dialog).toMatch(/\.body\s*{[^}]*min-height:\s*0;/);
    // Open/closed display never depends on UA-stylesheet internals
    // (comments stripped: prose mentions of display: must not match).
    const code = dialog.replace(/\/\*[\s\S]*?\*\//g, '');
    expect(code).toMatch(/\.dialog\[open\]\s*{[^}]*display:\s*flex;/);
    expect(code).toMatch(/\.dialog:not\(\[open\]\)\s*{[^}]*display:\s*none;/);
    expect(code.match(/\.dialog\s*{[^}]*display:/g) ?? []).toHaveLength(0);
  });

  it('keeps selectbar options borderless inside the bordered bar', () => {
    // Design contract: the bar carries the single outer border, options
    // are text buttons, selected is the primary fill — never outlined.
    const selectbar = css('Selectbar');
    expect(selectbar).toMatch(/\.option\s*{[^}]*border:\s*none;/);
    expect(selectbar).toMatch(
      /\.bar\s*{[^}]*border:\s*var\(--dx-border-width\)/
    );
    expect(selectbar).not.toMatch(/\.selected\s*{[^}]*border-color:/);
    expect(selectbar).not.toMatch(/\.option\s*{[^}]*border:\s*1px/);
  });
});
