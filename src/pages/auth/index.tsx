import { Leaf, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

export const LoginScreenOptions = {
  headerShown: false,
};

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  async function handleLogin() {
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let hasError = false;

    if (!email) {
      setEmailError("E-mail é obrigatório");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Senha é obrigatória");
      hasError = true;
    }

    if (hasError) {
      toast.error("Erro! Preencha todos os campos corretamente");
      return;
    }

    setLoggingIn(true);

    try {
      await login(email, password);
      toast.success("Sucesso! Login realizado com sucesso");
    } catch (err: any) {
      setLoginError("E-mail ou senha incorretos");
      toast.error(`Erro! E-mail ou senha incorretos`);
    } finally {
      setLoggingIn(false);
    }
  }

  return (
    <section className="flex w-full justify-center items-center bg-primary-100 py-10">
      <div className="w-full max-w-md">
        <p className="text-3xl font-bold text-center text-black mb-10">
          <Leaf size={40} className="text-primary-500 mx-auto" />
          FIAP Farms
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="text-black mb-1 block">
              E-mail
            </label>
            <div
              className={`flex flex-row items-center border rounded-xl bg-white px-3 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Mail size={18} className="text-primary-500" />
              <input
                id="email"
                type="email"
                className="flex-1 p-3 bg-white text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Digite seu e-mail"
                value={email}
                aria-required="true"
                aria-invalid={emailError ? "true" : "false"}
                aria-describedby={emailError ? "email-error" : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                autoCapitalize="none"
              />
            </div>
            {emailError && (
              <p
                id="email-error"
                role="alert"
                className="text-red-500 text-sm mt-1"
              >
                {emailError}
              </p>
            )}
          </div>

          <section className="mb-6">
            <label htmlFor="password" className="text-black mb-1 block">
              Senha
            </label>
            <div
              className={`flex flex-row items-center border rounded-xl bg-white px-3 ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Lock size={18} className="text-primary-500" />
              <input
                id="password"
                type="password"
                className="flex-1 p-3 bg-white text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Digite sua senha"
                value={password}
                aria-required="true"
                aria-invalid={passwordError ? "true" : "false"}
                aria-describedby={passwordError ? "password-error" : undefined}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
              />
            </div>
            {passwordError && (
              <p
                id="password-error"
                role="alert"
                className="text-red-500 text-sm mt-1"
              >
                {passwordError}
              </p>
            )}
          </section>

          {loginError && (
            <p role="alert" className="text-red-500 text-sm mt-4 text-center">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            disabled={loggingIn}
            aria-busy={loggingIn}
            className={`rounded-xl py-4 w-full  focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ${
              loggingIn ? "bg-primary-500/75" : "bg-primary-500"
            }`}
          >
            <p className="text-white text-center font-semibold">
              {loggingIn ? "Carregando..." : "Entrar"}
            </p>
          </button>
        </form>
      </div>
    </section>
  );
};
