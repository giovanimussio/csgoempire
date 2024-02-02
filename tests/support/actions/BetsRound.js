const { test, expect } = require("@playwright/test");

const betsContainerLineLocator = '[class*="bets-container__inner"]';
const betsTotalLocator = ">div>div>img";
const betsAmoutLocator = "";

export class BetsRound {
  constructor(page) {
    this.page = page;
  }

  async betsRoundIsVisible() {
    await this.page.goto("https://csgoempire.com/roulette");
    await this.page.waitForLoadState("networkidle");
    await this.page.locator(betsContainerLineLocator).isVisible();
  }
  async totalBetsByBet() {
    const totalBetsLocator = await this.page
      .locator(betsContainerLineLocator + betsTotalLocator)
      .getByAltText("ct", { exact: true })
      .nth(1);
    const text = await totalBetsLocator.innerText();

    console.log(text);
  }
}
