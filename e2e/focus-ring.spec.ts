import { expect, test } from '@playwright/test';

/**
 * Focus-ring width probe (#43): every focus treatment renders at
 * `--dx-focus-ring-width` (2px) with `--dx-focus-ring-offset` (2px),
 * field borders at `--dx-border-width` (1px), and indicator borders at
 * `--dx-border-width-strong` (2px). The source ratchet in tokens.test.ts
 * catches reintroduced raw px literals; this probe catches computed-style
 * regressions the source scan cannot see (specificity overrides,
 * !important, rule-order flips).
 */

type RingStyles = {
  focusVisible: boolean;
  outlineWidth: string;
  outlineStyle: string;
  outlineOffset: string;
  boxShadow: string;
  borderTopWidth: string;
};

const readStyles = async (
  page: import('@playwright/test').Page,
  selector: string
): Promise<RingStyles> => {
  const el = page.locator(selector).first();
  await el.focus();
  // Focus kicks off box-shadow/outline transitions — read after they settle,
  // otherwise getComputedStyle reports an interpolated spread (e.g. 0.33px).
  await el.evaluate(async (node) => {
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r))
    );
    const anims = node.getAnimations();
    if (anims.length > 0) {
      await Promise.race([
        Promise.all(anims.map((a) => a.finished.catch(() => undefined))),
        new Promise((r) => setTimeout(r, 1000)),
      ]);
    }
  });
  return el.evaluate((node) => {
    const cs = getComputedStyle(node);
    return {
      focusVisible: node.matches(':focus-visible'),
      outlineWidth: cs.outlineWidth,
      outlineStyle: cs.outlineStyle,
      outlineOffset: cs.outlineOffset,
      boxShadow: cs.boxShadow,
      borderTopWidth: cs.borderTopWidth,
    };
  });
};

test('#button — outline-idiom focus ring is 2px solid at 2px offset', async ({
  page,
}) => {
  await page.goto('/#/button');
  await page.waitForSelector('main button');
  const s = await readStyles(page, 'main button');
  expect(s.focusVisible).toBe(true);
  expect(s.outlineStyle).toBe('solid');
  expect(s.outlineWidth).toBe('2px');
  expect(s.outlineOffset).toBe('2px');
});

test('#textbox — shadow-idiom focus ring spreads 2px over a 1px border', async ({
  page,
}) => {
  await page.goto('/#/textbox');
  await page.waitForSelector('main input');
  const s = await readStyles(page, 'main input');
  expect(s.focusVisible).toBe(true);
  expect(s.boxShadow).toContain('0px 0px 0px 2px');
  expect(s.borderTopWidth).toBe('1px');
});

test('#select — shadow-idiom focus ring spreads 2px over a 1px border', async ({
  page,
}) => {
  await page.goto('/#/select');
  await page.waitForSelector('main select');
  const s = await readStyles(page, 'main select');
  expect(s.focusVisible).toBe(true);
  expect(s.boxShadow).toContain('0px 0px 0px 2px');
  expect(s.borderTopWidth).toBe('1px');
});

test('#tabs — active underline indicator is --dx-border-width-strong (2px)', async ({
  page,
}) => {
  await page.goto('/#/tabs');
  const active = page
    .locator('main [role="tab"][aria-selected="true"]')
    .first();
  await active.waitFor();
  const indicator = await active.evaluate((node) => {
    const cs = getComputedStyle(node);
    return {
      width: cs.borderBottomWidth,
      style: cs.borderBottomStyle,
    };
  });
  expect(indicator.style).toBe('solid');
  expect(indicator.width).toBe('2px');
});
