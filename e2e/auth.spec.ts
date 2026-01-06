import { test as e2e, expect } from "@playwright/test";

e2e.describe("Authentication", () => {
  e2e("should load login page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Farms/i);
    await expect(page.getByRole("button", { name: /Entrar/i })).toBeVisible();
  });

  e2e("should login with valid credentials", async ({ page }) => {
    await page.goto("/");

    const emailInput = page.getByPlaceholder(/Digite seu e-mail/i);
    await emailInput.waitFor({ state: "visible" });
    await emailInput.fill("teste@exemplo.com");

    await page.getByPlaceholder(/Digite sua senha/i).fill("usuario_teste");

    await page.getByRole("button", { name: /Entrar/i }).click();

    await expect(page).toHaveURL(/\//);
  });

  e2e("should show error with invalid credentials", async ({ page }) => {
    await page.goto("/");

    await page
      .getByPlaceholder(/Digite seu e-mail/i)
      .fill("invalido@exemplo.com");
    await page.getByPlaceholder(/Digite sua senha/i).fill("senhaerrada");
    await page.getByRole("button", { name: /Entrar/i }).click();

    await expect(
      page.getByText(/Erro! E-mail ou senha incorretos/i)
    ).toBeVisible();
  });
});
