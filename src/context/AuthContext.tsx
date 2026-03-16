import { createContext } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;

  signIn: (email: string, password: string) => Promise<boolean>;

  signUp: (name: string, email: string, password: string) => Promise<boolean>;

  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);
