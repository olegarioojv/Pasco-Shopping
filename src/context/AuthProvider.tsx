import { useState, } from "react";
import type { ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { login } from "../services/api";


type Props = {
  children: ReactNode;
};

const USER_STORAGE_KEY = "auth:user";
const TOKEN_STORAGE_KEY = "auth:token";

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(() => {
    // ✅ Restaura sessão ao recarregar a página
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  });

  async function signIn(email: string, password: string): Promise<boolean> {
    try {
      // ✅ Usa a função centralizada do api.ts (POST, sem senha na URL)
      const result = await login(email.trim(), password.trim());

      if (!result) return false;

      const { user: loggedUser, token } = result;

      // ✅ Salva usuário e token no localStorage para persistir a sessão
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(loggedUser));
      localStorage.setItem(TOKEN_STORAGE_KEY, token);

      setUser(loggedUser);
      return true;
    } catch (error) {
      // ✅ Trata falha de rede sem quebrar o app
      console.error("Erro ao fazer login:", error);
      return false;
    }
  }

  function logout() {
    setUser(null);
    // ✅ Remove os itens que de fato foram salvos
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
