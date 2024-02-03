const { test, expect } = require("../support");

test("Should present the roulette animation ", async ({ page }) => {
  await page.roulette.visitRoulette();
  await page.roulette.rouletteSectionIsVisible();
  await page.roulette.rouletteIsRunning(true);
  await page.betOptions.betButtonChoiceRouletteRollingState();
  await page.betsRound.betsRoundStateWhenRouletteIsRunning();
});

test("Should present all sections in the main page ", async ({ page }) => {
  await page.roulette.visitRoulette();
  await page.roulette.rouletteSectionIsVisible();
  await page.betOptions.betSectionIsVisible();
  await page.betOptions.betButtonChoiceIsVisible();
  await page.roulette.withdrawButtonIsVisible();
  await page.roulette.depositButtonIsVisible();
  await page.roulette.signInButtonIsVisible();
  await page.betsRound.betsRoundIsVisible();
  await page.betsRound.previousRollsIsVisible();
  await page.roulette.dailyRouletteRaceIsVisible();
  await page.roulette.chatIsOpen();
});

test("Should open the Withdraw page ", async ({ page }) => {
  await page.roulette.visitRoulette();
  await page.roulette.rouletteSectionIsVisible();
  await page.roulette.clickOnButton("Withdraw");
  await page.withdraw.withdrawPageIsVisible();
});

test("Should open the Signin modal when the user clicks on the bet options ", async ({
  page,
}) => {
  await page.roulette.visitRoulette();
  await page.betOptions.chooseBet("ct");
  await page.signinModal.signinModalIsVisible();
});
