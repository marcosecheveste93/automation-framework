import { type Locator, type Page, expect } from "@playwright/test";
import { checkoutCompleteData } from "../../../data/pageData/checkoutComplete.data";

export class CheckoutComplete {
    private readonly page: Page;
    private readonly title: Locator;
    private readonly header: Locator;
    private readonly text: Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.locator('[data-test="title"]')
        this.header = page.locator('[data-test="complete-header"]')
        this.text = page.locator('[data-test="complete-text"]')
    }

    async completeCheckout (){
        await expect(this.title).toHaveText(checkoutCompleteData.title);
        await expect(this.header).toHaveText(checkoutCompleteData.header);
        await expect(this.text).toHaveText(checkoutCompleteData.text);
    }
}