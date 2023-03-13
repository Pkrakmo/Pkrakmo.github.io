import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mimung/);
});


test('Check github', async ({ page }) => {
  await page.goto('/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#github').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://github.com/pkrakmo')
})

test('Check anilist', async ({ page }) => {
  await page.goto('/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#anilist').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://anilist.co/user/Mimung')
})