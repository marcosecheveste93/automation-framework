import { type Locator, type Page, expect } from "@playwright/test";

export class CheckoutStepTwoPage {
    private readonly page: Page;
    private readonly finishButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]')

    }

    async finishCheckout (){
        await this.finishButton.click();
    }
}