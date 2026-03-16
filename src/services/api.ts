export const API_URL = "http://localhost:3001";

type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
};

/* ---------------- LOGIN ---------------- */

export async function login(
  email: string,
  password: string,
): Promise<{
  token: string;
  user: User;
} | null> {
  try {
    const response = await fetch(
      `${API_URL}/users?email=${encodeURIComponent(email)}`,
    );

    const users = await response.json();

    if (!users.length) return null;

    const user = users[0];

    if (user.password !== password) return null;

    return {
      token: "fake-jwt-token",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.error("Erro na API login:", error);
    return null;
  }
}

/* ---------------- REGISTER ---------------- */

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<User | null> {
  try {
    // verificar se email já existe
    const check = await fetch(
      `${API_URL}/users?email=${encodeURIComponent(email)}`,
    );

    const existingUsers = await check.json();

    if (existingUsers.length > 0) {
      console.log("❌ Email já cadastrado");

      return null;
    }

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (!response.ok) return null;

    const newUser = await response.json();

    return newUser;
  } catch (error) {
    console.error("Erro na API register:", error);

    return null;
  }
}
