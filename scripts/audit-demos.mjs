/**
 * Demo depth audit — visits every routed demo slug on the preview build and
 * reports section counts plus whether a Keyboard section is present.
 *
 * Usage:
 *   npm run demos:build
 *   npx vite preview demos --host 127.0.0.1 --port 4199 --strictPort &
 *   node scripts/audit-demos.mjs
 *
 * Output: a markdown table on stdout. Exit code is 0 (report only);
 * use it to spot shallow demos, then raise the floors in
 * e2e/demo-completeness.spec.ts as pages improve.
 */
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const navSrc = readFileSync(join(ROOT, '..', 'demos', 'nav.ts'), 'utf8');
const SLUGS = [...navSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const BASE = process.env.AUDIT_BASE || 'http://127.0.0.1:4199';
const rows = [];
for (const slug of SLUGS) {
  const page = await context.newPage();
  try {
    await page.goto(`${BASE}/#/${slug}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);
    const sections = await page.locator('main section[aria-label] [class*="_card_"][id]').count();
    const headings = await page
      .locator('main section[aria-label] [class*="_card_"][id] h2')
      .allInnerTexts();
    const hasKeyboard = headings.some((h) => /keyboard/i.test(h));
    rows.push({ slug, sections, hasKeyboard });
  } catch (e) {
    rows.push({ slug, sections: -1, hasKeyboard: false, error: String(e).slice(0, 80) });
  }
  await page.close();
}
await context.close();
await browser.close();

rows.sort((a, b) => a.sections - b.sections || a.slug.localeCompare(b.slug));
console.log('| slug | sections | keyboard |');
console.log('|---|---:|---:|');
for (const r of rows) {
  console.log(`| ${r.slug} | ${r.sections} | ${r.hasKeyboard ? 'yes' : 'NO'} |${r.error ? '  <!-- ' + r.error + ' -->' : ''}`);
}
const shallow = rows.filter((r) => r.sections < 5);
const noKb = rows.filter((r) => r.sections >= 3 && !r.hasKeyboard);
console.log('');
console.log(`shallow (<5 sections): ${shallow.length}`);
console.log(`missing keyboard section: ${noKb.length}`);