import { test } from "@playwright/test";
import { beforeEach } from "node:test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";

test.describe("Sorting Functionality", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    });
    test("Sort products by Price (low to high)", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
        //step 1 - ordenar by filter low to high
            await test.step("Order filter from low to high", async () => {
                await inventoryPage.sortProductBy('Price (low to high)')
            });
        //step 2 - verificar orden 
            await test.step("Verify order was successfully applied", async () => {
                await inventoryPage.verifyPricesSortedLowToHigh();
            });
    });
});