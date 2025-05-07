import { test, expect } from '@playwright/test';
import { PORT } from '../config/constants';

const staticFiles = [
  '/app.html',
  '/index.html',
  '/bg.png',
  '/favicon.ico',
  '/favicon.svg'
];

staticFiles.forEach((file) => {
  test(`should return status 200 for ${file}`, async ({ page }) => {
    const response = await page.goto(`http://localhost:${PORT}${file}`);
    expect(response.status()).toBe(200);
  });
});