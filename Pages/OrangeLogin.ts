
import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../Locators/Loginlocators';

export class OrangeLogin {

    constructor(private page: Page) {}

    // Open OrangeHRM Login Page
    async openLoginPage() {
        await this.page.goto('/web/index.php/auth/login');
    }

    // Enter Username
    async enterUsername(username: string) {
        await this.page.locator(LoginLocators.username).fill(username);
    }

    // Enter Password
    async enterPassword(password: string) {
        await this.page.locator(LoginLocators.password).fill(password);
    }

    // Click Login Button
    async clickLogin() {
        await this.page.locator(LoginLocators.loginButton).click();
    }

    // TC01: Verify Successful Login
    async verifyDashboard() {
        await expect(this.page).toHaveURL(/dashboard/);
        await expect(this.page.locator(LoginLocators.dashboard)).toBeVisible();
    }

    // TC02, TC03, TC04: Verify Invalid Credentials
    async verifyInvalidCredentials() {
        await expect(this.page.locator(LoginLocators.invalidCredentials)).toBeVisible();
    }

    // TC05: Verify Empty Username
    async verifyUsernameRequired() {
        await expect(this.page.locator(LoginLocators.usernameRequired)).toBeVisible();
    }

    // TC06: Verify Empty Password
    async verifyPasswordRequired() {
        await expect(this.page.locator(LoginLocators.passwordRequired)).toBeVisible();
    }

    // TC07: Verify Password Masking
    async verifyPasswordMasking() {
        await expect(this.page.locator(LoginLocators.password))
            .toHaveAttribute('type', 'password');
    }

    // TC08: Verify Login Page Title
    async verifyLoginTitle() {
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }

    // TC09: Verify Username Field Visibility
    async verifyUsernameVisible() {
        await expect(this.page.locator(LoginLocators.username)).toBeVisible();
    }

    // TC10: Verify Password Field Visibility
    async verifyPasswordVisible() {
        await expect(this.page.locator(LoginLocators.password)).toBeVisible();
    }

    // TC11: Verify Login Button Visibility
    async verifyLoginButtonVisible() {
        await expect(this.page.locator(LoginLocators.loginButton)).toBeVisible();
    }

  

// TC12Click Forgot Password
async clickForgotPassword() {
    await this.page.getByText('Forgot your password?', { exact: true }).click();
}

// Verify Forgot Password Navigation
async verifyForgotPasswordNavigation() {
    await expect(this.page).toHaveURL(/requestPasswordResetCode/);
}

async pauseExecution() {
    await this.page.pause();
}


}

