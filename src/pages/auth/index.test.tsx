import { fireEvent, render, waitFor } from "@/test/test-utils";
import { Login } from "./index";
import { useAuth } from "@/context/AuthContext";
import { vi } from "vitest";

vi.mock("@/context/AuthContext", () => ({
  useAuth: vi.fn(),
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Login", () => {
  const mockLogin = vi.fn();

  beforeEach(() => {
    (useAuth as any).mockReturnValue({
      login: mockLogin,
    });
    mockLogin.mockClear();
  });

  it("should render login form", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    expect(getByText("TEST")).toBeInTheDocument();
    expect(getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument();
  });

  it("should show validation errors when fields are empty", () => {
    const { getByRole, getAllByText } = render(<Login />);

    const submitButton = getByRole("button", { name: /entrar/i });
    fireEvent.click(submitButton);

    const errorHeading = getByRole("heading", {
      name: /encontramos 2 erros no formulário/i,
    });
    expect(errorHeading).toBeInTheDocument();
    expect(document.activeElement).toBe(errorHeading);

    expect(getAllByText("E-mail é obrigatório")[1]).toBeInTheDocument();
    expect(getAllByText("Senha é obrigatória")[1]).toBeInTheDocument();
  });

  it("should link errors to inputs using aria-describedby", () => {
    const { getByRole, getByPlaceholderText } = render(<Login />);

    const submitButton = getByRole("button", { name: /entrar/i });
    fireEvent.click(submitButton);

    const emailInput = getByPlaceholderText("Digite seu e-mail");
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(emailInput).toHaveAttribute("aria-describedby", "email-error");

    const emailError = document.getElementById("email-error");
    expect(emailError).toHaveTextContent("E-mail é obrigatório");
  });

  it("should call login function with correct data", async () => {
    const { getByPlaceholderText, getByRole } = render(<Login />);

    fireEvent.change(getByPlaceholderText("Digite seu e-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Digite sua senha"), {
      target: { value: "password123" },
    });

    const submitButton = getByRole("button", { name: /entrar/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@example.com", "password123");
    });
  });

  it("should show error message when login fails", async () => {
    mockLogin.mockRejectedValue(new Error("Login failed"));
    const { getByPlaceholderText, getByRole, findByText } = render(<Login />);

    fireEvent.change(getByPlaceholderText("Digite seu e-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Digite sua senha"), {
      target: { value: "wrongpassword" },
    });

    const submitButton = getByRole("button", { name: /entrar/i });
    fireEvent.click(submitButton);

    const errorMessage = await findByText("E-mail ou senha incorretos");
    expect(errorMessage).toBeInTheDocument();
  });
});
