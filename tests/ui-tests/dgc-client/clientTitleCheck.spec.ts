import { test, expect } from '@playwright/test';

test('Check Mostary Portfolio', async ({ page }) => {
  await page.goto('https://mostary-jahan.vercel.app/');
    // Locate the heading by text
    const heading = page.locator('h1', { hasText: 'Mostary Jahan' }).first();
    await expect(heading).toHaveText('Mostary Jahan');

});

  