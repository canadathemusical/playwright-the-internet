class Page {
  constructor(page) {
    this.page = page;
  }

  async goto(arg = "") {
    await this.page.goto("https://the-internet.herokuapp.com/" + arg);
  }
}

module.exports = { Page };
