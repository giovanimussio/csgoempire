const { test, expect } = require("@playwright/test");
const betButtonLocator = '[class*="bet-input__control"]';
export class BetOptions {
  constructor(page) {
    this.page = page;
  }

  async betSectionIsVisible() {
    await this.page.goto("https://csgoempire.com/roulette");
    await this.page.waitForLoadState("networkidle");
    await this.page.locator('[class*="wheel relative"]').isVisible();
  }

  async betInputFieldIsVisible() {
    await this.page.getByPlaceholder("Enter bet amount...").isVisible();
  }
  async allBetButtonsAreVisible() {
    const betValues = [
      "CLEAR",
      "+ 0.01",
      "+ 0.1",
      "+ 1",
      "+ 10",
      "+ 100",
      "+ 1/2",
      "x 2",
    ];
    async function processBetValues() {
      for (const betValue of betValues) {
        await betButtonIsVisible(betValue);
      }
    }

    processBetValues();
  }

  async betButtonIsVisible(betValue) {
    await this.page
      .locator(betButtonLocator)
      .getByRole("button", { name: betValue, exact: true })
      .isVisible();
  }
  async clickOnBet(betValue) {
    await this.page
      .locator(betButtonLocator)
      .getByRole("button", { name: betValue, exact: true })
      .click();
  }
  async totalBetIs() {
    await this.page.locator();
  }
}
