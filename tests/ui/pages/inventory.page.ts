import { type Locator, type Page, expect } from "@playwright/test";
import { InventoryPageData } from "../../data/pageData/inventoryPage.data";

export class InventoryPage {
    private readonly page: Page;
    private readonly inventoryTitle: Locator;
    private readonly sortDropdown: Locator;
    private readonly productPrice: Locator;
    




    constructor(page: Page) {
        this.page = page;
        this.inventoryTitle = page.locator('[data-test="title"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');

    }   

    async verifyInventoryPageIsDisplayed() {
        await expect(this.page).toHaveURL(
            `${process.env.UI_BASE_URL}${InventoryPageData.url}`);
        await expect(this.inventoryTitle).toHaveText(InventoryPageData.title);
    }


    async sortProductBy(option : string) {
        await this.sortDropdown.selectOption(option);
    }

    async verifyPricesSortedLowToHigh(){
        const textPrices = await this.productPrice.allTextContents();
        console.log("Text Prices: ",textPrices);

        const numericPrices = textPrices.map((price) => parseFloat(price.slice(1)));
        console.log("Numeric Prices: ",numericPrices);

        const sortedPrices = [...numericPrices].sort((a, b) => a - b);
        console.log("Numbers sorted: ",sortedPrices);
        
        expect(numericPrices).toEqual(sortedPrices);
    }
}
