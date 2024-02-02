const { test } = require("../support");

test("Should present all bets components ", async ({ page }) => {
  await page.betOptions.betSectionIsVisible();
  await page.betOptions.betInputFieldIsVisible();
  await page.betOptions.betButtonIsVisible("CLEAR");
  await page.betOptions.betButtonIsVisible("+ 0.01");
  await page.betOptions.betButtonIsVisible("+ 0.1");
  await page.betOptions.betButtonIsVisible("+ 1");
  await page.betOptions.betButtonIsVisible("+ 10");
  await page.betOptions.betButtonIsVisible("+ 100");
  await page.betOptions.betButtonIsVisible(" 1/2");
  await page.betOptions.betButtonIsVisible("x 2");
  await page.betOptions.betButtonIsVisible("Max");
});
