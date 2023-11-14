import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uitestingplayground.com/');
  await page.getByRole('link',{name: 'Verify Text'}).click();
  await page.getByText('Hello Username!').nth(1).click();
  const heading = await page.getByRole('heading',{name:'Scenario'});
  await expect( await heading.innerText()).toContain('Scenario');
 
});