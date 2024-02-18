const { Page } = require("./page.po");

class BasicAuth extends Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

    // elements
    // this.header = page.getByRole("heading", { name: "A/B Test" });
  }

  async goto() {
    await super.goto("basic_auth");
  }
}

module.exports = { BasicAuth };
