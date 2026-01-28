import { type Locator, type Page, expect } from "@playwright/test";
import { InventoryPageData } from "../../data/pageData/inventoryPage.data";

export class InventoryPage {
    private readonly page: Page;
    private readonly inventoryTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inventoryTitle = page.locator('[data-test="title"]');
    }   

    async verifyInventoryPageIsDisplayed() {
        await expect(this.page).toHaveURL(
            `${process.env.UI_BASE_URL}${InventoryPageData.url}`);
        await expect(this.inventoryTitle).toHaveText(InventoryPageData.title);
    }
}