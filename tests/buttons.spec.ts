import { test, expect } from '@playwright/test';

const buttons = [{
  id: "github",
  url: "https://github.com/pkrakmo"
},
{ 
  id: "anilist",
url: "https://anilist.co/user/Mimung"}
 
]


buttons.forEach(data =>{
  test(`check if ${data.id} button works as expected`, async ({ page }) => {
    await page.goto('/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator(`#${data.id}`).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(`${data.url}`)
  })
})