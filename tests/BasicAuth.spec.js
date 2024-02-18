// @ts-check
const { test, expect } = require("@playwright/test");
const { TheInternetHomePage } = require("../page-objects/home.po");
const { ABTesting } = require("../page-objects/abTesting.po");
const { BasicAuth } = require("../page-objects/basicAuth.po");

test("it should go to the a/b testing page", async ({ page }) => {
  // const Home = new TheInternetHomePage(page);
  // await Home.goto();
  // await Home.aBTestingLink.click();
const basicAuth = new BasicAuth(page)
await basicAuth.goto();
console.log("here?")
await page.on("dialog", async dialog => {
  console.log("dialog?")
  console.log(dialog.message)});
console.log("here")
  // const abTesting = new ABTesting(page);
  // await expect(abTesting.header).toBeInViewport();
});
