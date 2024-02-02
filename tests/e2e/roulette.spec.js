const { test, expect } = require("../support");

test("Should present the roulette animation ", async ({ page }) => {
  await page.roulette.rouletteSectionIsVisible();
  await page.roulette.rouletteIsRunning(true);
});
