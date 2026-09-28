/**
 * Palette extraction — one-shot transform of the vendored Radzen theme
 * stylesheets in preview/styles/, run manually whenever the vendored
 * sources are replaced:
 *
 *   node scripts/extract-palettes.mjs
 *
 * Two steps per file:
 *
 * 1. Scope — every selector is prefixed with `:root[data-palette='X']`
 *    (`:root` itself gains the attribute; element/class selectors get the
 *    scope prepended). Dark files use `:root[data-palette='X']
 *    [data-theme='dark']` so light/dark rules are mutually exclusive and
 *    beat tokens.css on specificity (0,3,0). @font-face / @keyframes are
 *    left unprefixed. Prefixing (rather than load-order scoping) is what
 * keeps switch-back correct: dynamic stylesheets stay in the document
 * once loaded, so a fluent sheet must never match while material-3
 *    is the active palette.
 *
 * 2. Gap-fill appendix — the vendored files speak the Radzen raw layer
 *    (--dx-primary, --dx-base-*) while components consume the semantic
 *    contract (--dx-*-color from tokens.css). The appendix maps the core
 *    semantic tokens onto the palette's raw layer, appended after the
 *    file's own rules so it wins at equal specificity. Mode-specific
 *    tonal roles (surface-hover, text-muted, border-strong) are emitted
 *    per file: light into the light file (0,2,0), dark into the dark file
 *    (0,3,0). var() indirection resolves against whichever raw block
 *    wins the cascade, so the shared map adapts across modes.
 *
 * Idempotent: files already carrying [data-palette= are skipped.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import postcss from 'postcss';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * WCAG fixes applied to the vendored source at transform time. Radzen
 * ships a couple of values that axe flags once the preview renders real
 * content (measured on the docs index page):
 *
 * - fluent light `--dx-secondary: #8a8886` + white badge text = 3.53:1.
 *   Darkened to #6b6966 (white5.47:1); its hover end follows so the
 *   white-text pair stays AA (#5b5a58 → 6.06:1).
 * - material-3 light `--dx-primary: #3481e5` used as the link color on
 *   #f8fafb = 3.70:1 (and white-on-primary 3.88:1). #1565c0 (Material
 *   blue-800) restores 5.50:1 link / 5.76:1 button contrast while
 *   staying the theme's brand blue; --dx-link-color derives from it.
 *
 * Each pattern must match exactly once — the run aborts otherwise.
 */
const VALUE_FIXES = {
  'preview/styles/fluent-base.css': {
    '--dx-secondary': '#6b6966',
    '--dx-secondary-dark': '#5b5a58',
  },
  'preview/styles/material3-base.css': {
    '--dx-primary': '#1565c0',
  },
};

const FILES = [
  { path: 'preview/styles/fluent-base.css', palette: 'fluent', dark: false },
  {
    path: 'preview/styles/fluent-dark-base.css',
    palette: 'fluent',
    dark: true,
  },
  {
    path: 'preview/styles/material3-base.css',
    palette: 'material-3',
    dark: false,
  },
  {
    path: 'preview/styles/material3-dark-base.css',
    palette: 'material-3',
    dark: true,
  },
];

/** Core tokens.css contract → Radzen raw layer. Shared across modes. */
const SHARED_APPENDIX = {
  '--dx-background-color': 'var(--dx-body-background-color)',
  '--dx-surface-color': 'var(--dx-base-background-color)',
  '--dx-border-color': 'var(--dx-base-300)',
  '--dx-primary-color': 'var(--dx-primary)',
  '--dx-primary-hover-color': 'var(--dx-primary-dark)',
  '--dx-on-primary-color': 'var(--dx-on-primary)',
  '--dx-danger-color': 'var(--dx-danger)',
  '--dx-danger-hover-color': 'var(--dx-danger-dark)',
  '--dx-on-danger-color': 'var(--dx-on-danger)',
  '--dx-success-color': 'var(--dx-success)',
  '--dx-success-hover-color': 'var(--dx-success-dark)',
  '--dx-on-success-color': 'var(--dx-on-success)',
  '--dx-warning-color': 'var(--dx-warning)',
  '--dx-warning-hover-color': 'var(--dx-warning-dark)',
  '--dx-on-warning-color': 'var(--dx-on-warning)',
  '--dx-info-color': 'var(--dx-info)',
  '--dx-info-hover-color': 'var(--dx-info-dark)',
  '--dx-on-info-color': 'var(--dx-on-info)',
  '--dx-secondary-color': 'var(--dx-secondary)',
  '--dx-secondary-hover-color': 'var(--dx-secondary-dark)',
  '--dx-on-secondary-color': 'var(--dx-on-secondary)',
  '--dx-soft-color': 'var(--dx-secondary)',
  '--dx-soft-hover-color': 'var(--dx-secondary-dark)',
  '--dx-on-soft-color': 'var(--dx-on-secondary)',
  '--dx-neutral-color': 'var(--dx-secondary)',
  '--dx-neutral-hover-color': 'var(--dx-secondary-dark)',
  '--dx-on-neutral-color': 'var(--dx-on-secondary)',
  '--dx-focus-color': 'color-mix(in srgb, var(--dx-primary) 40%, transparent)',
  '--dx-font-sans': 'var(--dx-text-font-family)',
  '--dx-palette-0-color': 'var(--dx-series-1)',
  '--dx-palette-1-color': 'var(--dx-series-2)',
  '--dx-palette-2-color': 'var(--dx-series-3)',
  '--dx-palette-3-color': 'var(--dx-series-4)',
  '--dx-palette-4-color': 'var(--dx-series-5)',
  '--dx-palette-5-color': 'var(--dx-series-6)',
};

/** Tonal roles that must read the mode-appropriate end of the ramp. */
const MODE_APPENDIX = {
  light: {
    '--dx-surface-hover-color': 'var(--dx-base-100)',
    '--dx-text-muted-color': 'var(--dx-base-600)',
    '--dx-border-strong-color': 'var(--dx-base-500)',
  },
  dark: {
    '--dx-surface-hover-color': 'var(--dx-base-600)',
    '--dx-text-muted-color': 'var(--dx-base-100)',
    '--dx-border-strong-color': 'var(--dx-base-300)',
  },
};

/** Split a selector list on top-level commas (parens/brackets depth-aware). */
function splitSelectors(selector) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const ch of selector) {
    if (ch === '(' || ch === '[') depth += 1;
    else if (ch === ')' || ch === ']') depth -= 1;
    if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  parts.push(current);
  return parts;
}

function scopeSelector(selector, scope) {
  return splitSelectors(selector)
    .map((part) => {
      const trimmed = part.trim();
      // :root / :root:has(...) — graft the palette attribute onto :root.
      if (trimmed.startsWith(':root')) {
        return trimmed.replace(/^:root/, scope);
      }
      return `${scope} ${trimmed}`;
    })
    .join(', ');
}

function buildAppendix(scope, mode) {
  const decls = { ...SHARED_APPENDIX, ...MODE_APPENDIX[mode] };
  const body = Object.entries(decls)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');
  return `\n/* semantic gap-fill appendix — generated by scripts/extract-palettes.mjs */\n${scope} {\n${body}\n}\n`;
}

let changed = 0;
let skipped = 0;

for (const { path, palette, dark } of FILES) {
  const absolute = join(ROOT, path);
  const original = readFileSync(absolute, 'utf8');
  if (original.includes('[data-palette=')) {
    skipped += 1;
    console.log(`skip (already processed): ${path}`);
    continue;
  }

  const hasBom = original.charCodeAt(0) === 0xfeff;
  let css = hasBom ? original.slice(1) : original;
  for (const [name, value] of Object.entries(VALUE_FIXES[path] ?? {})) {
    const needle = `${name}: `;
    const first = css.indexOf(needle);
    if (first === -1) throw new Error(`${path}: ${name} not found`);
    if (css.indexOf(needle, first + needle.length) !== -1) {
      throw new Error(`${path}: ${name} declared more than once`);
    }
    const start = first + needle.length;
    const end = css.indexOf(';', start);
    css = css.slice(0, start) + value + css.slice(end);
  }
  const mode = dark ? 'dark' : 'light';
  const scope = dark
    ? `:root[data-palette='${palette}'][data-theme='dark']`
    : `:root[data-palette='${palette}']`;

  const root = postcss.parse(css, { from: absolute });
  let rewritten = 0;
  root.walkRules((rule) => {
    const parentName = rule.parent?.name ?? '';
    // Keyframe steps (from/to/50%) are not scoped; @font-face has no rules.
    if (/(^|-)keyframes$/.test(parentName)) return;
    const next = scopeSelector(rule.selector, scope);
    if (next !== rule.selector) {
      rule.selector = next;
      rewritten += 1;
    }
  });

  root.append(postcss.parse(buildAppendix(scope, mode), { from: undefined }));

  const output = (hasBom ? '﻿' : '') + root.toString();
  writeFileSync(absolute, output);
  changed += 1;
  console.log(`processed: ${path} (${rewritten} selectors scoped, ${mode})`);
}

console.log(`done — ${changed} changed, ${skipped} skipped`);
