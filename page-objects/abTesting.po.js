const { expect } = require("@playwright/test");
const { Page } = require("./page.po");

class ABTesting extends Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;

    // elements
    this.header = page.getByRole("heading", { name: "A/B Test" });
  }

  async goto() {
    await super.goto("abtesting/");
  }
}

module.exports = { ABTesting };
