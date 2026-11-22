export const LoginLocators = {
    username: '//input[@name="username"]',
    password: '//input[@name="password"]',
    loginButton: '//button[@type="submit"]',
    dashboard: '//h6[text()="Dashboard"]',
    invalidCredentials: '//p[text()="Invalid credentials"]',
    usernameRequired: '//input[@name="username"]/ancestor::div[contains(@class,"oxd-input-group")]//span[text()="Required"]',
    passwordRequired: '//input[@name="password"]/ancestor::div[contains(@class,"oxd-input-group")]//span[text()="Required"]',
    loginTitle: '//h5[text()="Login"]',
    forgotPassword: '//p[text()="Forgot your password?"]'

};
