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

  async function handleLogin() {
    if (!email || !password) {
      toast.error("Erro! Preencha e-mail e senha");
      return;
    }

    setLoggingIn(true);
    try {
      await login(email, password);
      toast.success("Sucesso! Login realizado com sucesso");
    } catch (err: any) {
      const errorMessage =
        err.code === 401
          ? "E-mail ou senha incorretos"
          : err.message || toast.error("Falha ao autenticar");
      toast.error(`Erro! ${errorMessage}`);
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

        <div className="mb-4">
          <p className="text-black mb-1">E-mail</p>
          <div className="flex flex-row items-center border border-gray-300 rounded-xl bg-white px-3">
            <Mail size={18} className="text-primary-500" />
            <input
              className="flex-1 p-3 bg-white text-primary-500"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoCapitalize="none"
            />
          </div>
        </div>

        <section className="mb-6">
          <p className="text-black mb-1">Senha</p>
          <div className="flex flex-row items-center border border-gray-300 rounded-xl bg-white px-3">
            <Lock size={18} className="text-primary-500" />
            <input
              className="flex-1 p-3 bg-white text-primary-500"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>

        <button
          onClick={handleLogin}
          disabled={loggingIn}
          className={`rounded-xl py-4 w-full ${
            loggingIn ? "bg-primary-500/75" : "bg-primary-500"
          }`}
        >
          <p className="text-white text-center font-semibold">
            {loggingIn ? "Carregando..." : "Entrar"}
          </p>
        </button>
      </div>
    </section>
  );
};
