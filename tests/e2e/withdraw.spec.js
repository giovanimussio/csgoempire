const { test, expect } = require("../support");

test("Should present the withdraw page properly ", async ({ page }) => {
  await page.withdraw.withdrawPageIsVisible();
  await page.withdraw.steamSectionIsVisible();
  await page.withdraw.cryptocurrencySectionIsVisible();
});

test("Should present the steam market page when a not logged in user clicks on the steam button in the withdraw page ", async ({
  page,
}) => {
  await page.withdraw.withdrawPageIsVisible();
  await page.withdraw.clickOnSteamButton();
  await page.withdraw.steamMarketIsVisible();
});
