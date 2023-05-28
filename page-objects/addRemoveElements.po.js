const { Page } = require("./page.po");

class AddRemoveElements extends Page {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get elements() {
    return {
      addButton: () => this.page.getByRole("button", { name: "Add Element" }),
      deleteButtons: () =>
        this.page.getByRole("button", { name: "Delete" }).all(),
    };
  }

  async addElements(num) {
    const addButton = await this.elements.addButton();
    for (let index = 0; index < num; index++) {
      await addButton.click();
    }
  }

  async removeElements(num) {
    for (let index = 0; index < num; index++) {
      const lastEl = (await this.elements.deleteButtons())[num - (index + 1)];
      await lastEl.click();
    }
  }

  async goto() {
    await super.goto("add_remove_elements/");
  }
}

module.exports = { AddRemoveElements };
