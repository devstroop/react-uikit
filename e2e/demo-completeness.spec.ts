import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { DEMO_GROUPS } from '../demos/nav';

/**
 * Demo completeness (docs/DEMO_GUIDE.md checklist) asserted against the
 * shipped DOM: every routed demo carries an H1, the description subtitle,
 * and at least its documented floor of section cards — each with an
 * anchor id (Toc target) and a heading. The nav registry must match the
 * route table in demos/routes.ts exactly.
 *
 * This replaces the old vitest version, which mocked `DemoPage` to
 * capture props from inside demos/. Running the real page covers what
 * visitors actually get and needs no mock.
 */

/** Documented floors below the 3-section checklist (DEMO_GUIDE #2). */
const MIN_SECTIONS: Record<string, number> = {
  icon: 2, // glyph gallery + usage prose — two sections is the whole page
};
const DEFAULT_MIN_SECTIONS = 3;

const SLUGS = DEMO_GROUPS.flatMap((group) =>
  group.routes.map((route) => route.slug)
);

test.describe('demo completeness — registries', () => {
  test('nav and the route table list the same slugs, each exactly once', () => {
    expect(new Set(SLUGS).size, 'duplicate slug in nav').toBe(SLUGS.length);

    // demos/routes.ts cannot be imported here: it pulls page modules
    // that import CSS, which the playwright loader executes as JS and
    // rejects. Read the table as text instead (file-content assertion).
    const source = readFileSync(
      fileURLToPath(new URL('../demos/routes.ts', import.meta.url)),
      'utf8'
    );
    const table = source.slice(
      source.indexOf('export const ROUTE_COMPONENTS'),
      source.indexOf('export function resolveRoute')
    );
    expect(table, 'route table slice resolved').not.toBe('');
    const routed = [
      ...table.matchAll(/^\s{4}(?:'([^']*)'|([A-Za-z]\w*)):\s+\w+,/gm),
    ].map((match) => match[1] ?? match[2]);
    expect(routed, 'index route (empty slug) missing').toContain('');
    expect(routed.filter((slug) => slug !== '').sort()).toEqual(
      [...SLUGS].sort()
    );
  });
});

test.describe('demo completeness — checklist', () => {
  for (const slug of SLUGS) {
    const min = MIN_SECTIONS[slug] ?? DEFAULT_MIN_SECTIONS;
    test(`route #/${slug} — H1, description, ≥${min} titled sections`, async ({
      page,
    }) => {
      await page.goto(`/#/${slug}`);
      // DemoSection frame — one per routed page, always the first
      // section[aria-label] inside main (demo content nests deeper).
      const demo = page.locator('main section[aria-label]').first();
      await expect(demo, 'DemoSection frame').toBeVisible();

      const h1 = demo.locator('h1').first();
      await expect(h1).toBeVisible();
      expect((await h1.innerText()).trim(), `route "${slug}" H1`).not.toBe('');

      // DemoPage's subtitle — a direct child of the frame (DEMO_GUIDE #1).
      const description = demo.locator(':scope > p.dx-text-muted');
      await expect(
        description,
        `route "${slug}" description subtitle`
      ).toHaveCount(1);
      expect((await description.innerText()).trim()).not.toBe('');

      // Section cards: demo-page.tsx is the only place a Card carries an
      // anchor id, so this count is the section count (DEMO_GUIDE #2).
      const sections = demo.locator('[class*="_card_"][id]');
      const count = await sections.count();
      expect(
        count,
        `route "${slug}" has ${count} sections; the checklist floor is ` +
          `${min} — add sections or document the floor in this spec ` +
          '(docs/DEMO_GUIDE.md)'
      ).toBeGreaterThanOrEqual(min);
      for (let i = 0; i < count; i += 1) {
        const heading = sections.nth(i).locator('h2').first();
        await expect(
          heading,
          `route "${slug}" section ${i + 1} has a heading`
        ).toBeVisible();
        expect(
          (await heading.innerText()).trim(),
          `route "${slug}" section ${i + 1} heading`
        ).not.toBe('');
      }
    });
  }
});
