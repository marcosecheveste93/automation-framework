import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";


test.describe("Login functionality", () => {
    test("Login and verify inventory page is displayed", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
  
      await test.step("Go to login page", async () => {
        await loginPage.goTo();
      });
  
      await test.step("Login with standard user", async () => {
        await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
      });
  
      await test.step("Verify inventory page is displayed", async () => {
        await inventoryPage.verifyInventoryPageIsDisplayed();
      });
  });
});