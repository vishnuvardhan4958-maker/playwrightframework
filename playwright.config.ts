
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    trace: 'on-first-retry',

    headless: false,

    launchOptions: {
      slowMo: 1000,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
