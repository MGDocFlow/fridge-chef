import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '/workspaces/fridge-chef/tests/e2e/playwright',
  testMatch: '**/*.test.js',
  testIgnore: [],
  use: {
    headless: true,
    baseURL: 'http://localhost:8081',
    trace: 'on',
  },
  reporter: [['list'], ['json', { outputFile: 'test-results/report.json' }]],
});