// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,


  reporter:  [['html', { open: 'on-failure' }]],
  expect : { timeout : 60*1000, },


  use: {
    baseURL: process.env.BASE_URL || 'https://your-fsm-app.com',
    headless: true,
     
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
  ],
});