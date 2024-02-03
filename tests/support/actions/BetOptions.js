const { test, expect } = require("@playwright/test");
const betButtonLocator = '[class*="bet-input__control"]';
export class BetOptions {
  constructor(page) {
    this.page = page;
  }

  async betSectionIsVisible() {
    await this.betInputFieldIsVisible();
    await this.betButtonIsVisible("CLEAR");
    await this.betButtonIsVisible("+ 0.01");
    await this.betButtonIsVisible("+ 0.1");
    await this.betButtonIsVisible("+ 1");
    await this.betButtonIsVisible("+ 10");
    await this.betButtonIsVisible("+ 100");
    await this.betButtonIsVisible(" 1/2");
    await this.betButtonIsVisible("x 2");
    await this.betButtonIsVisible("Max");
  }

  async betInputFieldIsVisible() {
    await this.page.getByPlaceholder("Enter bet amount...").isVisible();
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

  async betButtonChoiceIsVisible() {
    const betsButtonChoiceRound = await this.page.$$(
      '[class*="bet-btn-holder"]'
    );
    const betButtonSize = betsButtonChoiceRound.length;
    await expect(betButtonSize).toBe(3);
  }

  async betButtonChoiceRouletteRollingState() {
    const betsButtonChoiceState = await this.page.$$(
      '[class*="bet-btn-holder"]'
    );
    const betButtonSize = betsButtonChoiceState.length;
    await expect(betButtonSize).toBe(3);
  }
  async chooseBet(betOption) {
    const betChoosedOption = new RegExp(`^${betOption}`);
    await this.betButtonChoiceRouletteRollingState();
    // await this.page.locator('[class="bet-btn"]').click();
    await this.page
      .getByRole("button", {
        name: betChoosedOption,
        exact: true,
      })
      .click();
  }
}
