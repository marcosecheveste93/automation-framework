import { test } from "@playwright/test"
import { LoginPage } from "../pages/login.page"
import { InventoryPage } from "../pages/inventory.page"
import { ShoppingCartPage } from "../pages/shoppingCart.page";
import { CheckoutStepOnePage } from "../pages/checkout/checkoutStepOne.page";
import { CheckoutStepOneData } from "../../data/testData/checkoutStepOne.data";
import { CheckoutStepTwoPage } from "../pages/checkout/checkoutStepTwo.page";
import { CheckoutComplete } from "../pages/checkout/checkoutComplete.page";


test.describe("E2E - Checkout functionality", () => {
    test("Add Item to Cart and Complete Checkout", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        const checkoutStepOnePage = new CheckoutStepOnePage(page);
        const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
        const checkoutComple = new CheckoutComplete(page);

        await test.step("Login with standard user", async () => {
            await loginPage.goTo();
            await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
        });

        await test.step("Add to cart", async () => {
            await inventoryPage.addItemToCart();
        });

        await test.step("Go to Checkout", async () => {
            await inventoryPage.goToShoppingCart();
            await shoppingCartPage.goToCheckout();
        });

        await test.step("Complete Client Information and Finish checkout", async () => {
            await checkoutStepOnePage.completeClientInformation(
                CheckoutStepOneData.firstName,
                CheckoutStepOneData.lastName,
                CheckoutStepOneData.postalCode,
            );
            await checkoutStepOnePage.continueCheckout();
            await checkoutStepTwoPage.finishCheckout();
        }); 
        
        await test.step("Verify Order is completed", async () => {
            await checkoutComple.completeCheckout();
        });        
    });
});