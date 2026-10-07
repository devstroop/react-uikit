import { test, expect } from '@playwright/test';

const positions = [
  'bottom-left',
  'bottom-right',
  'top-right',
  'top-left',
] as const;

test.describe('FabMenu positioning', () => {
  for (const pos of positions) {
    test(`FabMenu ${pos} — trigger stays pinned, menu opens away edge-aligned`, async ({
      page,
    }) => {
      await page.goto('/#/fabmenu');
      // The page mounts exactly one FAB; the select retargets it.
      await page.getByLabel('FAB position').selectOption(pos);

      const trigger = page.getByRole('button', { name: 'Open menu' });
      await expect(trigger).toHaveCount(1);
      const before = await trigger.boundingBox();
      expect(before).not.toBeNull();

      await trigger.click();
      const menu = page.locator('[role="menu"][aria-label="Open menu"]');
      await expect(menu).toBeVisible();

      const after = await trigger.boundingBox();
      const m = await menu.boundingBox();
      const first = await menu.getByRole('menuitem').first().boundingBox();
      expect(after).not.toBeNull();
      expect(m).not.toBeNull();
      expect(first).not.toBeNull();

      // Opening must not nudge the trigger out of its corner.
      expect(after).toEqual(before);

      const opensDown = pos.startsWith('top');
      const alignLeft = pos.endsWith('left');
      if (opensDown) {
        expect(m!.y).toBeGreaterThanOrEqual(after!.y + after!.height);
      } else {
        expect(m!.y + m!.height).toBeLessThanOrEqual(after!.y);
      }
      if (alignLeft) {
        expect(Math.abs(first!.x - after!.x)).toBeLessThanOrEqual(1);
      } else {
        expect(
          Math.abs(first!.x + first!.width - (after!.x + after!.width))
        ).toBeLessThanOrEqual(1);
      }

      await page.keyboard.press('Escape');
      await expect(menu).not.toBeVisible();
      // Closing restores the exact same geometry as before opening.
      expect(await trigger.boundingBox()).toEqual(before);
    });
  }

  test('FabMenu — exactly one trigger exists regardless of position', async ({
    page,
  }) => {
    await page.goto('/#/fabmenu');
    for (const pos of positions) {
      await page.getByLabel('FAB position').selectOption(pos);
      await expect(page.locator('button[aria-haspopup="menu"]')).toHaveCount(1);
    }
  });
});
