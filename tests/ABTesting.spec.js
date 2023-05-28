// @ts-check
const { test, expect } = require("@playwright/test");
const { TheInternetHomePage } = require("../page-objects/home.po");
const { ABTesting } = require("../page-objects/abTesting.po");

test("it should go to the a/b testing page", async ({ page }) => {
  const Home = new TheInternetHomePage(page);
  await Home.goto();
  await Home.aBTestingLink.click();

  const abTesting = new ABTesting(page);
  await expect(abTesting.header).toBeInViewport();
});
