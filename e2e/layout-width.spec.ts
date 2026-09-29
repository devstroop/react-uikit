import { expect, test } from '@playwright/test';

/**
 * Layout width regression: `Body` children must flow at the full width
 * available after the sidebar. `Body` used to be a flex container, so
 * each page's content was a content-sized flex item and stopped short
 * (gaps of 60–590px on 38 of 87 routes). These routes are the ones the
 * audit caught; the gap must stay at zero (± rounding).
 */
const SAMPLE = [
  '',
  'button',
  'text',
  'row',
  'badge',
  'stat',
  'accordion',
  'recipe-login',
  'recipe-404',
];

for (const slug of SAMPLE) {
  test(`route #/${slug} — content fills the body width`, async ({ page }) => {
    await page.goto(`/#/${slug}`);
    await page.waitForSelector('main section');
    const gap = await page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return -1;
      const mr = main.getBoundingClientRect();
      const innerRight =
        mr.right - parseFloat(getComputedStyle(main).paddingRight || '0');
      let maxRight = 0;
      for (const el of Array.from(main.querySelectorAll<HTMLElement>('*'))) {
        const b = el.getBoundingClientRect();
        if (b.height < 40 || b.width < 20) continue;
        if (b.right > maxRight) maxRight = b.right;
      }
      return innerRight - maxRight;
    });
    expect(gap).toBeLessThanOrEqual(4);
  });
}
