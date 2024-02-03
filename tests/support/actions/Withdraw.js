const { test, expect } = require("@playwright/test");

export class Withdraw {
  constructor(page) {
    this.page = page;
  }
  async visitWithdrawPage() {
    await this.page.goto("https://csgoempire.com/withdraw");
    await this.page.waitForLoadState("networkidle");
  }
  async withdrawPageIsVisible() {
    const pageH2Title = this.page.locator('[class="text-light-1"]');
    await expect(pageH2Title).toHaveText("Withdraw");
  }

  async steamSectionIsVisible() {
    const steamSubtitle = this.page.locator('[class="my-lg"]');
    const csgoText = this.page
      .locator('[class="my-lg"]')
      .filter({ class: "card__name" });

    await steamSubtitle.filter({ alt: "CS:GO" }).isVisible();
    await csgoText.isVisible();
    await expect(steamSubtitle).toHaveText("Steam");
  }

  async cryptocurrencySectionIsVisible() {
    const cryptoSubtitle = this.page.locator('[class="mb-lg mt-xl"]');

    await cryptoSubtitle.filter({ alt: "Bitcoin" }).isVisible();
    await cryptoSubtitle.filter({ alt: "Bitcoin Cash" }).isVisible();
    await cryptoSubtitle.filter({ alt: "Ethereum" }).isVisible();
    await cryptoSubtitle.filter({ alt: "Litecoin" }).isVisible();
    await cryptoSubtitle.filter({ alt: "USDC" }).isVisible();
    await cryptoSubtitle.filter({ alt: "USDT" }).isVisible();
    await expect(cryptoSubtitle).toHaveText("Cryptocurrency");
  }

  async clickOnSteamButton() {
    await this.page.locator('[href="/withdraw/steam/market"]>div').click();
  }

  async clickOnBitcoinButton() {
    const cryptoSubtitle = this.page.locator('[class="mb-lg mt-xl"]');
    await cryptoSubtitle.filter({ class: "card" }).click();
  }

  async steamMarketIsVisible() {
    const pageH2Title = this.page.locator('[class="mb-lg text-light-1"]');
    await expect(this.page).toHaveURL(
      "https://csgoempire.com/withdraw/steam/market"
    );
    await this.page.waitForLoadState("networkidle");
    await expect(pageH2Title).toHaveText("CS:GO");
  }

  async steamLoginPopupIsVisible() {
    const siginPopupLocator = this.page.locator('[class="pb-lg text-light-1"]');
    const subtitlePopupMessage = this.page.locator('[class="size-medium"]');
    const signInButton = this.page
      .locator('[class*="modal__wrapper"]')
      .filter({ type: "button" });

    await this.page.locator('[class*="modal__wrapper"]').isVisible();
    await this.page.waitForLoadState("networkidle");
    await siginPopupLocator.isVisible();
    await subtitlePopupMessage.isVisible();
    await signInButton.isVisible();
    await expect(siginPopupLocator).toHaveText("Sign in");
    await expect(subtitlePopupMessage).toHaveText(
      "Please sign in to start playing!"
    );
  }
}
