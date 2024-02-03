const { test, expect } = require("@playwright/test");

export class SigninModal {
  constructor(page) {
    this.page = page;
  }

  async signinModalIsVisible() {
    const signInModal = this.page.locator('[class*="modal__wrapper"]');
    const signInModalTitle = this.page.locator(
      '[class*="modal__wrapper"]>div>div>h2'
    );
    const signInModalSubTitle = this.page.locator(
      '[class*="modal__wrapper"]>div>div>div>p'
    );
    const signInModalButton = this.page.locator(
      '[class*="modal__wrapper"]>div>div>div>button'
    );

    await signInModal.isVisible();
    await signInModalButton.isVisible();
    await expect(signInModalTitle).toHaveText("Sign in");
    await expect(signInModalSubTitle).toHaveText(
      "Please sign in to start playing!"
    );
  }
}
