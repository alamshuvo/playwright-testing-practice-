import {test, expect} from '@playwright/test';

test("verify admin can login with valid credentials", async ({page}) => {
    await page.goto("https://dgc-admin.yasoftware.net/login");
    await page.locator(`input[name="email"]`).click();
    await page.locator(`input[name="email"]`).fill('monayemhossain347@gmail.com')
    await page.locator(`input[name="password"]`).click();
    await page.locator(`input[name="password"]`).fill('1234567');
    await page.getByRole('link', {name: 'Login'}).click();
    await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible();
});