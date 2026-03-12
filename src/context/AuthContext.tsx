import { createContext } from "react";

export type User = {
  id: number;
  email: string;
  name?: string;
  // ✅ password removido — nunca armazene senha no estado do cliente
};

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);
