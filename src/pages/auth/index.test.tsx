import { fireEvent, render, waitFor } from "@/test/test-utils";
import { vi, beforeEach } from "vitest";
import { Login } from ".";
import { account } from "@/lib/appwrite";

vi.mock("@/lib/appwrite", () => ({
  account: {
    get: vi.fn(),
    createEmailPasswordSession: vi.fn(),
    deleteSession: vi.fn(),
  },
}));

describe("Login Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(account.get).mockRejectedValue(new Error("No session"));
  });

  it("should make a success login!", async () => {
    vi.mocked(account.createEmailPasswordSession).mockResolvedValue({} as any);
    vi.mocked(account.get).mockResolvedValue({ email: "user@test.com" } as any);

    const { getByPlaceholderText, getByRole, getByText } = render(<Login />);

    const emailInput = getByPlaceholderText(/Digite seu e-mail/i);
    const passwordInput = getByPlaceholderText(/Digite sua senha/i);
    const loginButton = getByRole("button", { name: /Entrar/i });

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();

    fireEvent.change(emailInput, { target: { value: "user@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    fireEvent.click(loginButton);

    waitFor(() => {
      expect(getByText(/Sucesso! Login realizado com sucesso/i)).toBeTruthy();
    });
  });

  it("should display errors for empty inputs", () => {
    const { getByRole, getByText } = render(<Login />);

    const loginButton = getByRole("button", { name: /Entrar/i });

    fireEvent.click(loginButton);

    expect(getByText(/E-mail é obrigatório/i)).toBeTruthy();
    expect(getByText(/Senha é obrigatória/i)).toBeTruthy();
    expect(
      getByText(/Erro! Preencha todos os campos corretamente/i)
    ).toBeTruthy();
  });

  it("should display error message when login fails (catch scenario)", async () => {
    vi.mocked(account.createEmailPasswordSession).mockRejectedValue(
      new Error("Invalid credentials")
    );

    const { getByPlaceholderText, getByRole, findAllByText } = render(
      <Login />
    );

    const emailInput = getByPlaceholderText(/Digite seu e-mail/i);
    const passwordInput = getByPlaceholderText(/Digite sua senha/i);
    const loginButton = getByRole("button", { name: /Entrar/i });

    fireEvent.change(emailInput, { target: { value: "wrong@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });

    fireEvent.click(loginButton);

    const errorMessages = await findAllByText(/E-mail ou senha incorretos/i);

    expect(errorMessages.length).toBeGreaterThan(0);
    const loginErrorMessage = errorMessages.find(
      (el) => el.getAttribute("role") === "alert"
    );
    expect(loginErrorMessage).toBeInTheDocument();

    expect(account.createEmailPasswordSession).toHaveBeenCalledWith({
      email: "wrong@test.com",
      password: "wrongpassword",
    });
  });
});
