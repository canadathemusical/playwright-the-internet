const { expect } = require("@playwright/test");

class ABTesting {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.header = page.getByRole("link", { name: "A/B Testing" });
  }
}

module.exports = { ABTesting };
