import { test, expect } from '@playwright/test';

test('minimal test', async () => {
  expect(1 + 1).toBe(2);
});