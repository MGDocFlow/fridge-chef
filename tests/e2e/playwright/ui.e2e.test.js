import { test, expect } from '@playwright/test';
import { CONFIG } from '../../../config/constants';
import { logTestResults } from '../../../src/index';

test('UI loads correctly', async ({ page }) => {
  await page.goto(`http://localhost:${CONFIG.test.PORT}/app.html`);
  await page.waitForTimeout(1000);

  // Verifica che il titolo sia visibile
  await page.waitForSelector('h1', { timeout: 5000 }); // Aumentato il timeout a 5000ms
  const title = await page.locator('h1');
  await expect(title).toHaveText('Fridge Chef');

  // Verifica che il campo di input sia visibile
  const inputField = await page.locator('input[type="text"]', { timeout: 5000 }); // Aumentato il timeout a 5000ms
  await expect(inputField).toBeVisible();

  // Verifica che il pulsante sia visibile
  const generateButton = await page.locator('button');
  await expect(generateButton).toHaveText('Generate Recipe');
});

test('Generate recipe with valid input', async ({ page }) => {
  await page.goto(`http://localhost:${CONFIG.test.PORT}/app.html`);
  await page.waitForTimeout(1000);

  // Inserisce gli ingredienti
  const inputField = await page.locator('input[type="text"]');
  await inputField.fill('tomato, cheese, basil');

  // Clicca sul pulsante per generare la ricetta
  const generateButton = await page.locator('button');
  await generateButton.click();

  // Verifica che una ricetta venga visualizzata
  const recipe = await page.locator('.recipe');
  await expect(recipe).toBeVisible({ timeout: 10000 }); // Aumento del timeout a 10 secondi
});

test.afterEach(async ({}, testInfo) => {
  const status = testInfo.status === 'passed' ? 'passed' : 'failed';
  const details = testInfo.error ? testInfo.error.message : 'Test passed successfully';
  logTestResults(testInfo.title, status, details);
});