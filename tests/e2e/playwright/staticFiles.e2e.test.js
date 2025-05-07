import { test, expect } from '@playwright/test';
import { CONFIG } from '../../../config/constants';
import { logTestResults } from '@src/index';

const staticFiles = [
  '/app.html',
  '/index.html',
  '/bg.png',
  '/favicon.ico',
  '/favicon.svg'
];

staticFiles.forEach((file) => {
  test(`should return status 200 for ${file}`, async ({ page }) => {
    const response = await page.goto(`http://localhost:${CONFIG.test.PORT}${file}`);
    expect(response.status()).toBe(200);
  });
});

test.afterEach(async ({}, testInfo) => {
  const status = testInfo.status === 'passed' ? 'passed' : 'failed';
  const details = testInfo.error ? testInfo.error.message : 'Test passed successfully';
  logTestResults(testInfo.title, status, details);
});