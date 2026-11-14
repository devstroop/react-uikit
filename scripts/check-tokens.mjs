// Token contract check: every var(--dx-*) referenced in lib/ must be
// defined in lib/styles/tokens.css or one of lib/styles/themes/*.css.
// Catches the "appearance not matching theme" class of bugs where a
// component references an undefined token and silently falls back to
// nothing.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.css')) out.push(p);
  }
  return out;
}

const defined = new Set();
const cssFiles = walk(join(ROOT, 'lib'));
for (const f of cssFiles) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/--dx-[a-zA-Z0-9-]+(?=:)/g)) defined.add(m[0]);
}

const used = new Set();
for (const f of cssFiles) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/var\(--dx-[a-zA-Z0-9-]+\)/g)) {
    used.add(m[0].slice(4, -1)); // --dx-...
  }
}

// Component-scoped tokens (defined inside the same file via --dx-foo: ...)
// are allowed; check global-ish ones against the union of all definitions
// already captured above, so this is a simple membership check.
const missing = [...used].filter((t) => !defined.has(t)).sort();
if (missing.length) {
  console.error(`check-tokens: ${missing.length} undefined token(s):`);
  for (const t of missing) console.error(`  ${t}`);
  process.exit(1);
}
console.log(`check-tokens: ok (${used.size} tokens, ${defined.size} definitions)`);
