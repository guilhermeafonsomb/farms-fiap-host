import { render, waitFor } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Login } from ".";

describe("Login Integration", () => {
  it("should make a success login!", async () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, getByRole, getByText } = render(<Login />);

    const emailInput = getByPlaceholderText(/Digite seu e-mail/i);
    const passwordInput = getByPlaceholderText(/Digite sua senha/i);
    const loginButton = getByRole("button", { name: /Entrar/i });

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();

    await user.type(emailInput, "user@test.com");
    await user.type(passwordInput, "123456");

    await user.click(loginButton);

    await waitFor(() => {
      expect(getByText(/Sucesso! Login realizado com sucesso/i)).toBeTruthy();
    });
  });

  it("should make a fail login ", async () => {
    const user = userEvent.setup();

    const { getByRole, getByText } = render(<Login />);

    const loginButton = getByRole("button", { name: /Entrar/i });
    await user.click(loginButton);

    await waitFor(() => {
      expect(getByText(/Erro! Preencha e-mail e senha/i)).toBeTruthy();
    });
  });
});
