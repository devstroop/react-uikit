import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { DEMO_GROUPS } from '../preview/nav';

const THEMES = [
  'default',
  'fluent',
  'github',
  'material',
  'material-3',
  'shadcn',
] as const;

/**
 * Drive the preview chrome to a known state and FAIL if the controls are
 * missing or the state never lands. The old locators matched nothing
 * (`.chrome-controls` never existed) behind `if (count)` guards, so the
 * dark half of the matrix silently ran light.
 */
async function applyChromeState(
  page: import('@playwright/test').Page,
  theme: (typeof THEMES)[number],
  dark: boolean
) {
  await page.goto('/');

  const select = page.locator('#preview-theme');
  await expect(select).toBeVisible();
  await select.selectOption(theme);
  await expect(select).toHaveValue(theme);

  // App.tsx imports the palette's stylesheets and only then sets
  // <html data-palette> (null for the default theme, which ships no
  // extra stylesheet) — poll it so axe runs against the loaded CSS.
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.dataset.palette ?? null)
    )
    .toBe(theme === 'default' ? null : theme);

  const darkToggle = page.locator('#preview-dark');
  await expect(darkToggle).toBeVisible();
  if (dark) await darkToggle.check();
  else await darkToggle.uncheck();

  // App.tsx mirrors the switch onto <html data-theme> — assert it landed
  // so a broken wiring fails the run instead of axe testing the wrong mode.
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.dataset.theme ?? null)
    )
    .toBe(dark ? 'dark' : '');
}

test.describe('axe — preview hardening (react)', () => {
  for (const theme of THEMES) {
    test(`theme=${theme} light — no axe violations`, async ({ page }) => {
      await applyChromeState(page, theme, false);
      const results = await new AxeBuilder({ page }).analyze();
      expect(
        results.violations,
        results.violations
          .map((v) => `${v.id} [${v.impact}] ${v.nodes[0]?.target}`)
          .join('\n')
      ).toEqual([]);
    });

    test(`theme=${theme} dark — no axe violations`, async ({ page }) => {
      await applyChromeState(page, theme, true);
      const results = await new AxeBuilder({ page }).analyze();
      expect(
        results.violations,
        results.violations
          .map((v) => `${v.id} [${v.impact}] ${v.nodes[0]?.target}`)
          .join('\n')
      ).toEqual([]);
    });
  }
});

test.describe('axe — every demo route (default theme)', () => {
  /**
   * The typography demo's entire point is rendering real heading tags
   * (DisplayH1–H6, H1–H6, Subtitle h6s) as samples, so its document
   * heading order is deliberately non-linear. Scoped, documented
   * exception — every other rule still runs there, and no other route
   * opts out.
   */
  const HEADING_ORDER_EXCEPTIONS = new Set(['text']);

  for (const group of DEMO_GROUPS) {
    for (const { slug } of group.routes) {
      test(`route #/${slug} — no axe violations`, async ({ page }) => {
        await page.goto(`/#/${slug}`);
        // Deep-linked hash route: wait for the demo's H1 before scanning,
        // so axe never runs against the shell's empty main.
        await expect(page.locator('h1').first()).toBeVisible();
        let builder = new AxeBuilder({ page });
        if (HEADING_ORDER_EXCEPTIONS.has(slug)) {
          builder = builder.disableRules(['heading-order']);
        }
        const results = await builder.analyze();
        expect(
          results.violations,
          results.violations
            .map((v) => `${v.id} [${v.impact}] ${v.nodes[0]?.target}`)
            .join('\n')
        ).toEqual([]);
      });
    }
  }
});

test.describe('keyboard & a11y — core primitives', () => {
  test('Button — focus-visible ring & Enter activates', async ({ page }) => {
    await page.goto('/');
    // Index demo's real button — the old /primary|button/i pattern matched
    // nothing and skipped unconditionally.
    const btn = page.getByRole('button', { name: 'Open dialog' });
    await expect(btn).toBeVisible();
    await btn.focus();
    await expect(btn).toBeFocused();
    // focus-visible ring uses --dx-color-focus (outline)
    await page.keyboard.press('Enter');
    await expect(
      page.locator("dialog[open], [role='dialog']").first()
    ).toBeVisible({ timeout: 2000 });
    await page.keyboard.press('Escape');
    await expect(
      page.locator("dialog[open], [role='dialog']").first()
    ).toBeHidden({ timeout: 2000 });
  });

  test('Dialog — Esc closes', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: 'Open dialog' });
    await expect(trigger).toBeVisible();
    await trigger.click();
    const dialog = page.locator("dialog[open], [role='dialog']").first();
    await expect(dialog).toBeVisible({ timeout: 2000 });
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden({ timeout: 2000 });
  });

  test('Tooltip — hover shows, Esc hides', async ({ page }) => {
    await page.goto('/');
    // The trigger only carries aria-describedby while open, and the index
    // page's closed Dialog always matches [aria-describedby] first (and is
    // invisible) — so target the curated Tooltip section's demo text.
    const trigger = page
      .locator('section[aria-label="Tooltip"]')
      .getByText('Hover for tooltip');
    await expect(trigger).toBeVisible();
    await trigger.hover();
    const tooltip = page.locator("[role='tooltip']").first();
    // tooltip appears after delayMs=300
    await expect(tooltip).toBeVisible({ timeout: 2000 });
    await page.keyboard.press('Escape');
    await expect(tooltip).toBeHidden({ timeout: 1000 });
  });

  test('Field — error links via aria-describedby & aria-live', async ({
    page,
  }) => {
    await page.goto('/');
    const input = page.locator('section[aria-label="Forms"] input');
    await expect(input).toBeVisible();

    // Index demo flips touched on blur/change; blur an empty field to
    // surface the required error (the old .dt-field selector never
    // existed, so this test always skipped).
    await input.focus();
    await page.keyboard.press('Tab');

    const error = page
      .locator('section[aria-label="Forms"] [aria-live="polite"]')
      .filter({ hasText: 'Name is required.' });
    await expect(error).toBeVisible();

    await expect(input).toHaveAttribute('aria-invalid', 'true');
    const errorId = await error.getAttribute('id');
    const describedBy = await input.getAttribute('aria-describedby');
    expect(describedBy?.split(/\s+/)).toContain(errorId);
  });
});
