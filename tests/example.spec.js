//@ts-check
const { test, expect } = require("@playwright/test");

test.describe("Testting navbar", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test.describe("Testeando tabla", () => {
  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
});

test("Verificar que la palabra enable este presente", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText(/enable/)).toBeVisible();
});

/* test.describe('Selectors',() =>{
  test('Usando getByLabel',async ({page}) =>{
    // version larga
    const checkbox = page.getByRole('checkbox');
    // const checkboxIsVisible = await checkbox.isVisible();
    // expect(checkboxIsVisible).toBeTruthy();
    
    // version corta
    expect(checkbox).toBeChecked();

    await page.goto('https://uitestingplayground.com/textinput'); //va a la pagina 
    const label = await page.getByLabel('Set New Button Name'); //si tiene el texto
    await expect(label).toBeVisible();  //si esta visible
  });
}) */

/* Usando el siguiente link http://uitestingplayground.com/
Ejercicio 1
1. Haz click en el link “Sample App”
2. Haz click en el botón “Log In”
3. Verifica que el mensaje “Invalid username/password” sea visible
4. Verifica que el mensaje sea de color rojo */


test.describe("Selectors", () => {
  
});