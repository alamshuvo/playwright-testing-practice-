import { test, expect } from "@playwright/test";

// page use korbo browser k control korar jonno r request use korbo api call er jonno
test("login to dgc client with valid userid and password", async ({ page }) => {
  // Navigate to dgc client app
  // Then click on login button
  // Now enter 'monayemhossain347@gmail.com' into the email field
  // enter password '1234567'  into the password field
  // Then click login button
  // Now verify 'logout' button to verify user login
  await page.goto("https://dgc.yasoftware.net");
  await page.locator("xpath=//a[@href='/login']").nth(0).click();
  await page
    .locator("xpath=//input[@name='email']")
    .fill("monayemhossain347@gmail.com");
  await page.locator("xpath=//input[@name='password']").fill("1234567");
  await page.locator("xpath=//button[@type='submit']").click();
  const logoutCheckText = await page
    .locator("(//li[text()='Logout'])[1]")
    .textContent();
  // asertion
});
