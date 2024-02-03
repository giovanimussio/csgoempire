const { test, expect } = require("@playwright/test");

export class SigninModal {
  constructor(page) {
    this.page = page;
  }

  async signinModalIsVisible() {
    await this.page.locator('[class*="modal__wrapper"]').isVisible();
  }
}
