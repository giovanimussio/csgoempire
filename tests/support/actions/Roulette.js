const { test, expect } = require("@playwright/test");
const betButtonLocator = '[class*="bet-input__control"]';
const redMarkerLocator = '[class="wheel__marker wheel__item absolute z-10"]';
const rollingTextLocator = '[class="mb-1 text-sm"]';
const timeoutLocator = '[class="font-numeric text-2xl font-bold"]';

export class Roulette {
  constructor(page) {
    this.page = page;
  }
  async visitRoulette() {
    await this.page.goto("https://csgoempire.com/roulette");
    await this.page.waitForLoadState("networkidle");
  }

  async rouletteSectionIsVisible() {
    await this.page.locator('[class*="wheel relative"]').isVisible();
  }
  async redMarkerIsVisible() {
    await this.page.locator(redMarkerLocator).isVisible();
  }
  async timeoutHasProperlyText(expectedText) {
    const timeout = this.page.locator(timeoutLocator);
    await expect(timeout).toHaveText(expectedText);
  }

  async clickOnButton(buttonName) {
    await this.page.getByText(buttonName).first().click();
  }

  async withdrawButtonIsVisible() {
    await this.page.locator('[class="mr-md w-1/2"]').isVisible();
  }

  async depositButtonIsVisible() {
    await this.page.locator('[class="w-1/2"]').isVisible();
  }
  async signInButtonIsVisible() {
    await this.page.locator('[class="user-action absolute"]').isVisible();
  }

  async rouletteIsRunning(timeoutStatus) {
    const rollingText = this.page.locator(rollingTextLocator);
    if (timeoutStatus) {
      await this.redMarkerIsVisible();
      await this.page.locator(timeoutLocator).isVisible();
      await this.page.locator(rollingTextLocator).isVisible();
      await expect(rollingText).toHaveText("Rolling");
      await this.timeoutHasProperlyText(/^(?!0\.00$)\d+(\.\d{1,2})?$/);
    } else {
      await this.page.locator(redMarkerLocator).isVisible();
      await this.page.locator(rollingTextLocator).isVisible();
      await this.page.locator(timeoutLocator).isVisible();
      await this.timeoutHasProperlyText("0.0");
    }
  }

  async dailyRouletteRaceIsVisible() {
    await this.page.locator('[class="mb-lg px-lg -mx-lg mt-xxl"]').isVisible();
  }
  async chatIsOpen() {
    await this.page.locator('[class*="chat--open"]').isVisible();
  }
}
