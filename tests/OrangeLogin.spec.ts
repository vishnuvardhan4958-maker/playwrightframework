
import { test } from '../Fixtures/BaseFixture';
import { LoginTestData } from '../Testdata/Logintestdata';

// TC01: Verify login with valid credentials
test('Verify login with valid credentials', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();

    //pause  step to observe the test execution
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername(LoginTestData.validUsername);
    await orangeLogin.enterPassword(LoginTestData.validPassword);
    await orangeLogin.clickLogin();
    await orangeLogin.verifyDashboard();
});

// TC02: Verify login with invalid username
test('Verify login with invalid username', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername('InvalidAdmin');
    await orangeLogin.enterPassword(LoginTestData.validPassword);
    await orangeLogin.clickLogin();
    await orangeLogin.verifyInvalidCredentials();
});

// TC03: Verify login with invalid password
test('Verify login with invalid password', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername(LoginTestData.validUsername);
    await orangeLogin.enterPassword('WrongPassword123');
    await orangeLogin.clickLogin();
    await orangeLogin.verifyInvalidCredentials();
});

// TC04: Verify login with both invalid credentials
test('Verify login with both invalid credentials', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername('InvalidAdmin');
    await orangeLogin.enterPassword('WrongPassword123');
    await orangeLogin.clickLogin();
    await orangeLogin.verifyInvalidCredentials();
});

// TC05: Verify login with empty username
test('Verify login with empty username', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername('');
    await orangeLogin.enterPassword(LoginTestData.validPassword);
    await orangeLogin.clickLogin();
    await orangeLogin.verifyUsernameRequired();
});

// TC06: Verify login with empty password
test('Verify login with empty password', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterUsername(LoginTestData.validUsername);
    await orangeLogin.enterPassword('');
    await orangeLogin.clickLogin();
    await orangeLogin.verifyPasswordRequired();
});

// TC07: Verify password masking
test('Verify password masking', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.enterPassword(LoginTestData.validPassword);
    await orangeLogin.verifyPasswordMasking();
});

// TC08: Verify login page title
test('Verify OrangeHRM Login Page Title', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.verifyLoginTitle();
});

// TC09: Verify username field visibility
test('Verify Username Field Visibility', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.verifyUsernameVisible();
});

// TC10: Verify password field visibility
test('Verify Password Field Visibility', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.verifyPasswordVisible();
});

// TC11: Verify login button visibility
test('Verify Login Button Visibility', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.verifyLoginButtonVisible();
});

// TC12: Verify Forgot Password navigation
test('Verify Forgot Password Navigation', async ({ orangeLogin }) => {
    await orangeLogin.openLoginPage();
    await orangeLogin.pauseExecution();
    await orangeLogin.clickForgotPassword();
    await orangeLogin.verifyForgotPasswordNavigation();
});

