import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-tests',
  testMatch: '**/e2e-tests/**/*.test.js',
  testIgnore: [],
  use: {
    headless: true,
    baseURL: 'http://localhost:8081',
    trace: 'on',
  },
});