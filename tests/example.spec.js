// @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


const { test, expect } = require('@playwright/test');

test('Google search', async ({ page }) => {
  // Navegamos a la página de Google
  await page.goto('https://www.google.com/');

  // Escribimos una consulta de búsqueda en el campo de búsqueda de Google
  await page.type('input[name="q"]', 'Playwright');

  // Presionamos la tecla "Enter" para realizar la búsqueda
  await page.press('input[name="q"]', 'Enter');

  // Esperamos a que aparezcan los resultados de la búsqueda
  await page.waitForSelector('.g');

  // Verificamos que al menos un resultado contiene la palabra "Playwright"
  const searchResults = await page.$$('.g');
  const resultTexts = await Promise.all(searchResults.map(result => result.innerText()));
  const containsPlaywright = resultTexts.some(text => text.includes('Playwright'));
  
  // Expect a que al menos un resultado contenga la palabra "Playwright"
  await expect(containsPlaywright).toBe(true);
});
