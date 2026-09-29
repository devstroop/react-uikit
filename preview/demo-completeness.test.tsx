import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DEMO_GROUPS } from './nav';
import type { DemoPageProps } from './pages/demo-page';
import { ROUTE_COMPONENTS } from './routes';

/**
 * Demo completeness ratchet (see docs/DEMO_GUIDE.md): every routed demo
 * page must carry a description and a Radzen-grade set of titled sections.
 * Pages that don't yet live in KNOWN_GAPS — a SHRINK-ONLY allowlist: the
 * test fails when an allowlisted page starts passing (remove it) or when
 * the list picks up stale slugs. The goal is an empty set.
 */

// Capture DemoPage props without mounting section content: the ratchet
// asserts the page data model, and mounting would pull chart/canvas,
// IntersectionObserver, and 500-row grids into jsdom for no gain.
const pending = { slug: '' };
const captured: Record<string, DemoPageProps | undefined> = {};

vi.mock('./pages/demo-page', () => ({
  DemoPage: (props: DemoPageProps) => {
    captured[pending.slug] = props;
    return null;
  },
}));

/** Floor for titled sections unless EXCEPTIONS documents less. */
const MIN_SECTIONS = 3;

/** Documented, justified minimums for genuinely smaller pages. */
const EXCEPTIONS: Record<string, number> = {
  icon: 2, // glyph gallery + usage prose — two sections is the whole page
};

/**
 * Slugs below the demo standard. Seeded at 71 (Phase 0); the Display
 * pilot took it to 64, Forms (Phase 3) to 38, Feedback (Phase 4) to 31,
 * Data (Phase 5) to 20. Shrink-only: entries are removed per phase and
 * must never come back.
 */
const KNOWN_GAPS = new Set([
  // Layout / chrome
  'header',
  'body',
  'footer',
  'sidebartoggle',
  'layout',
  'sidebar',
  'stack',
  'autogrid',
  // Buttons
  'fabmenu',
  // Navigation
  'breadcrumb',
  'link',
  'profilemenu',
  'tabs',
  'steps',
  'toc',
  'pager',
  // Theme (BASIC)
  'themeswitcher',
  'themetoggle',
  // Recipes
  'recipe-login',
  'recipe-404',
]);

function titledCount(props: DemoPageProps): number {
  return props.sections.filter((s) => s.title != null).length;
}

function meetsStandard(slug: string, props: DemoPageProps): boolean {
  const min = EXCEPTIONS[slug] ?? MIN_SECTIONS;
  return (
    (props.title ?? '').trim().length > 0 &&
    (props.description ?? '').trim().length > 0 &&
    props.sections.length > 0 &&
    props.sections.every((s) => (s.id ?? '').trim().length > 0) &&
    titledCount(props) >= min
  );
}

function renderProps(slug: string): DemoPageProps | undefined {
  const Page = ROUTE_COMPONENTS[slug];
  if (typeof Page !== 'function') {
    throw new Error(`route "${slug}" has no page component`);
  }
  delete captured[slug];
  pending.slug = slug;
  render(<Page slug={slug} />);
  pending.slug = '';
  return captured[slug];
}

const SLUGS = Object.keys(ROUTE_COMPONENTS)
  .filter((slug) => slug !== '')
  .sort();

describe('demo completeness — registries', () => {
  it('nav groups and route table list the exact same slugs', () => {
    const nav = DEMO_GROUPS.flatMap((g) => g.routes.map((r) => r.slug));
    expect(new Set(nav).size, 'duplicate slug in nav').toBe(nav.length);
    expect([...nav].sort()).toEqual(SLUGS);
  });

  it('KNOWN_GAPS holds only live routes (no stale allowlist entries)', () => {
    for (const slug of KNOWN_GAPS) {
      expect(
        ROUTE_COMPONENTS,
        `stale KNOWN_GAPS entry "${slug}"`
      ).toHaveProperty(slug);
    }
    expect(KNOWN_GAPS.has('')).toBe(false);
  });
});

describe('demo completeness — checklist ratchet', () => {
  it.each(SLUGS)('%s', (slug) => {
    const props = renderProps(slug);
    expect(
      props,
      `route "${slug}" never rendered <DemoPage> — the page is broken or returns null`
    ).toBeDefined();
    if (props == null) return;

    // Even allowlisted pages must actually render something — a
    // zero-section DemoPage returns null and the route shows a blank main.
    expect(
      props.sections.length,
      `route "${slug}" renders no <DemoPage> sections (blank page)`
    ).toBeGreaterThan(0);

    if (KNOWN_GAPS.has(slug)) {
      // Shrink-only: passing allowlisted pages must be removed from the list.
      expect(
        meetsStandard(slug, props),
        `route "${slug}" now meets the demo standard — remove it from ` +
          'KNOWN_GAPS in preview/demo-completeness.test.tsx'
      ).toBe(false);
      return;
    }

    expect(
      meetsStandard(slug, props),
      `route "${slug}" misses the demo checklist: needs a non-empty ` +
        '`description` and ' +
        `${EXCEPTIONS[slug] ?? MIN_SECTIONS} sections with ids and titles ` +
        '(see docs/DEMO_GUIDE.md) — or belongs in KNOWN_GAPS until its phase)'
    ).toBe(true);
  });
});
