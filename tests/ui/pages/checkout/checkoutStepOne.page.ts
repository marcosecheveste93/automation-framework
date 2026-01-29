import { type Locator, type Page, expect } from "@playwright/test";

export class CheckoutStepOnePage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async completeClientInformation(
        firstName: string,
        lastName: string,
        postalCode: string,
    ) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
    async continueCheckout (){
        await this.continueButton.click();
    }
}