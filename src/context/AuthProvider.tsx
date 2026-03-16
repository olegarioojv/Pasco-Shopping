import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext, type User } from "./AuthContext";
import { login, register } from "../services/api";

type Props = {
  children: ReactNode;
};

const USER_STORAGE_KEY = "auth:user";
const TOKEN_STORAGE_KEY = "auth:token";

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);

      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  });

  /* ---------------- LOGIN ---------------- */

  async function signIn(email: string, password: string): Promise<boolean> {
    try {
      const result = await login(email.trim(), password.trim());

      if (!result) return false;

      const { user: loggedUser, token } = result;

      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(loggedUser));

      localStorage.setItem(TOKEN_STORAGE_KEY, token);

      setUser(loggedUser);

      console.log("✅ Usuário logado:", loggedUser);

      return true;
    } catch (error) {
      console.error("Erro no login:", error);

      return false;
    }
  }

  /* ---------------- CADASTRO ---------------- */

  async function signUp(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    try {
      const newUser = await register(
        name.trim(),
        email.trim(),
        password.trim(),
      );

      if (!newUser) return false;

      console.log("✅ Usuário cadastrado:", newUser);

      // login automático após cadastro
      const success = await signIn(email, password);

      return success;
    } catch (error) {
      console.error("Erro no cadastro:", error);

      return false;
    }
  }

  /* ---------------- LOGOUT ---------------- */

  function logout() {
    setUser(null);

    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);

    console.log("🚪 Usuário deslogado");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
