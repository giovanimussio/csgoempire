const { test, expect } = require("@playwright/test");

const betsContainerLineLocator = '[class*="bets-container__inner"]';

export class BetsRound {
  constructor(page) {
    this.page = page;
  }

  async betsRoundIsVisible() {
    const betsRound = await this.page.$$(betsContainerLineLocator);
    const betsRoundSize = betsRound.length;
    console.log(betsRoundSize);
    await expect(betsRoundSize).toBe(3);
  }
  async betsRoundStateWhenRouletteIsRunning() {
    const betsRoundState = await this.page.$$(
      '[class*="bets-container-rolling"]'
    );
    const betRoundSize = betsRoundState.length;
    await expect(betRoundSize).toBe(0);
  }

  async previousRollsIsVisible() {
    await this.page.getByText("Previous Rolls").first().isVisible();
  }
}
