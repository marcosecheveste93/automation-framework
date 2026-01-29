import { type Locator, type Page, expect } from "@playwright/test";

export class ShoppingCartPage {
    private readonly page: Page;
    private readonly checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}

