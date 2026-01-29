import { type Locator, type Page} from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly loginButton: Locator;
    private readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async goTo() {
        await this.page.goto(process.env.UI_BASE_URL!);
    }

    async login(usernameInput: string, passwordInput: string) {
        await this.usernameInput.fill(usernameInput);
        await this.passwordInput.fill(passwordInput);
        this.loginButton.click();
    }
}