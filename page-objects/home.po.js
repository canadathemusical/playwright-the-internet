const { expect } = require("@playwright/test");

class TheInternetHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.aBTestingLink = page.getByRole("link", { name: "A/B Testing" });
  }

  async goto(arg = "") {
    await this.page.goto("https://the-internet.herokuapp.com/" + arg);
  }
}

module.exports = { TheInternetHomePage };
