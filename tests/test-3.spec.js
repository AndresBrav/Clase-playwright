/* Ejercicio 2
1. Haz clic en el link “Sample App”
2. Llenar el campo “User Name” con el nombre que más te guste
3. Llena el campo de “Password” con la cadena “pwd”
4. Haz click en el botón “Log In”
5. Verifica que el mensaje “Welcome, pepito!” (en tu caso el nombre que elegiste) sea
visible
6. Verifica que el mensaje sea de color verde */

import { test, expect } from "@playwright/test";


test('Prueba de inicio de sesión', async ({ page }) => {
  try {
    // Paso 1: Haz clic en el link "Sample App"
    await page.goto('http://uitestingplayground.com/');
    await page.locator('text=Sample App').click();

    // Espera un breve momento
    await page.waitForTimeout(1000);

    // Paso 2: Llenar el campo "User Name" con el nombre que más te guste
    await page.locator('input[name="UserName"]').fill('pepito');

    // Espera un breve momento
    await page.waitForTimeout(1000);

    // Paso 3: Llena el campo de "Password" con la cadena "pwd"
    await page.locator('input[name="Password"]').fill('pwd');

    // Espera un breve momento
    await page.waitForTimeout(1000);

    // Paso 4: Haz click en el botón "Log In"
    await page.locator('button:has-text("Log In")').click();

    // Espera un breve momento
    await page.waitForTimeout(1000);

    // Paso 5: Verifica que el mensaje "Welcome, pepito!" sea visible
    const welcomeMessage = await page.locator('text=Welcome, pepito!');

    // Verifica que el mensaje sea de color verde
    const color = await welcomeMessage.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return styles.color;
    });

    // Espera hasta que el color sea verde
    await expect(color).toBe('rgb(40, 167, 69)');

  } catch (error) {
    console.error('Error durante la ejecución:', error);
  }
});
