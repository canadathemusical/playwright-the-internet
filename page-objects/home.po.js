const { expect } = require("@playwright/test");
const { Page } = require("./page.po");

class TheInternetHomePage extends Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

    // elements
    this.aBTestingLink = page.getByRole("link", { name: "A/B Testing" });
  }

  async goto() {
    await super.goto();
  }
}

module.exports = { TheInternetHomePage };

