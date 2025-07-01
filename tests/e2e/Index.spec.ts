import { test, expect } from "@playwright/test";

test.describe("Página Inicial (Index)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8081");
  });

  test("deve exibir título e botões corretamente", async ({ page }) => {
    await expect(page.getByText("Tarefas Prioritárias")).toBeVisible();
    await expect(page.getByText("Ver Tarefas")).toBeVisible();
    await expect(page.getByText("Adicionar Tarefa")).toBeVisible();
  });

  test("deve navegar para /tarefas ao clicar em Ver Tarefas", async ({
    page,
  }) => {
    await page.click("text=Ver Tarefas");
    await expect(page).toHaveURL(/\/tarefas$/);
  });

  test("deve navegar para /adicionar ao clicar em Adicionar Tarefa", async ({
    page,
  }) => {
    await page.click("text=Adicionar Tarefa");
    await expect(page).toHaveURL(/\/adicionar$/);
  });
});

test.describe("Tela de Tarefas", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8081/tarefas");
  });

  test("deve listar tarefas visíveis na tela", async ({ page }) => {
    await page.goto("http://localhost:8081");
    await page.click("text=Ver Tarefas");
    await page.waitForSelector("text=Estudar React Native", { timeout: 5000 });
    await expect(
      page.locator("text=Estudar React Native").first()
    ).toBeVisible();
  });
});
