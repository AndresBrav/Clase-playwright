import { test, expect } from "@playwright/test";

/* Usando el siguiente link http://uitestingplayground.com/
Ejercicio 1
1. Haz click en el link “Sample App”
2. Haz click en el botón “Log In”
3. Verifica que el mensaje “Invalid username/password” sea visible
4. Verifica que el mensaje sea de color rojo */

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Sample App" }).click();
  await page.getByRole("button", { name: "Log In" }).click();
  // await page.getByText('Invalid username/password').click();

  // Espera un breve momento
  await page.waitForTimeout(1000);

  // Espera a que aparezca el mensaje de error y verifica que sea visible
  const errorMessage = await page.waitForSelector(
    "text=Invalid username/password"
  );

  // Espera un breve momento
  await page.waitForTimeout(1000);

  // Verifica que el mensaje de error sea visible
  const isVisible = await errorMessage.isVisible();
  expect(isVisible).toBeTruthy();

  // Espera un breve momento
  await page.waitForTimeout(1000);

  // Obtén el color del mensaje de error
  const color = await errorMessage.evaluate((element) => {
    const styles = window.getComputedStyle(element);
    return styles.color;
  });

  // Espera un breve momento
  await page.waitForTimeout(1000);

  // Verifica que el color sea rojo
  expect(color).toBe("rgb(220, 53, 69)"); // Puedes ajustar esto según el formato específico de color que obtienes
});
