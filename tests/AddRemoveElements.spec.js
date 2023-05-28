// @ts-check
const { test, expect } = require("@playwright/test");
const { AddRemoveElements } = require("../page-objects/addRemoveElements.po");
test.describe("Add remove elemets page", async () => {
  const NUM = Math.floor(Math.random() * 10) + 1;

  test.beforeEach(async ({ page }) => {
    const addRemoveElements = new AddRemoveElements(page);
    await addRemoveElements.goto();
    await addRemoveElements.addElements(NUM);
  });

  test("it should add elements to the page", async ({ page }) => {
    const addRemoveElements = new AddRemoveElements(page);
    expect(await addRemoveElements.elements.deleteButtons()).toHaveLength(NUM);
  });

  test("it should remove elements from the page", async ({page}) => {
    const addRemoveElements = new AddRemoveElements(page);
    await addRemoveElements.removeElements(NUM);

    expect(await addRemoveElements.elements.deleteButtons()).toHaveLength(0);
  });
});
