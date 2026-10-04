import { test, expect } from '@playwright/test';

// Per-component hardening checks deferred to component-scoped facts:
// Form validate-on-submit, Switch state, Dialog focus containment.
// Theme/a11y scanning lives in axe.spec.ts.

test.describe('component interaction hardening', () => {
  test('Form — validate-on-submit blocks empty submit, clears on valid submit', async ({
    page,
  }) => {
    await page.goto('/#/form');

    await page.getByRole('button', { name: 'Sign in' }).click();

    // onInvalidSubmit must surface: per-field error text and the log line.
    const log = page.getByLabel('Event log');
    await expect(log.getByText(/onInvalidSubmit:/).first()).toBeVisible();
    const name = page.getByLabel(/^Name/);
    await expect(name).toHaveAttribute('aria-invalid', 'true');

    // Errors clear as the user edits, then a valid submit logs success.
    await name.fill('Ada');
    await page.getByLabel(/^Email/).fill('ada@example.com');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(
      log.getByText(/onSubmit: all validators passed/)
    ).toBeVisible();
    await expect(name).not.toHaveAttribute('aria-invalid', 'true');
  });

  test('Switch — aria-checked tracks state and toggling updates visible state', async ({
    page,
  }) => {
    await page.goto('/#/switch');

    const sw = page.getByRole('switch', { name: 'Notifications' });
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(page.getByText('state: on')).toBeVisible();

    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await expect(page.getByText('state: off')).toBeVisible();

    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  test('Dialog — Tab and Shift+Tab stay inside the open dialog', async ({
    page,
  }) => {
    await page.goto('/#/dialog');

    await page.getByRole('button', { name: 'Open dialog' }).click();
    const dialog = page.locator("dialog[open], [role='dialog']").first();
    await expect(dialog).toBeVisible({ timeout: 2000 });

    // Keep hammering Tab/Shift+Tab — focus must never leave the dialog frame.
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('Tab');
      const inside = await page.evaluate(
        () =>
          !!(
            document.activeElement &&
            document.activeElement.closest("dialog[open], [role='dialog']")
          )
      );
      expect(inside, `focus escaped dialog on Tab ${i + 1}`).toBe(true);
    }
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('Shift+Tab');
      const inside = await page.evaluate(
        () =>
          !!(
            document.activeElement &&
            document.activeElement.closest("dialog[open], [role='dialog']")
          )
      );
      expect(inside, `focus escaped dialog on Shift+Tab ${i + 1}`).toBe(true);
    }

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden({ timeout: 2000 });
  });
});
