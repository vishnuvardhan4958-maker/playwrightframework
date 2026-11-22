
import { test as base, expect } from '@playwright/test';
import { OrangeLogin } from '../Pages/OrangeLogin';

type MyFixtures = {

    orangeLogin: OrangeLogin;

};

export const test = base.extend<MyFixtures>({

    orangeLogin: async ({ page }, use) => {

        const orangeLogin = new OrangeLogin(page);

        await use(orangeLogin);

    }

});

export { expect };



