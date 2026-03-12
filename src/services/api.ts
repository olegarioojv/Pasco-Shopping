export const API_URL = "http://localhost:3001";

/**
 * ✅ Em produção, o backend deve:
 *  1. Receber email/senha via POST no body (HTTPS obrigatório)
 *  2. Validar as credenciais internamente
 *  3. Retornar um token JWT — nunca retornar a senha
 *
 * O exemplo abaixo simula isso da melhor forma possível com json-server.
 * Substitua pela sua rota real de autenticação quando tiver um backend real.
 */
export async function login(
  email: string,
  password: string,
): Promise<{
  token: string;
  user: { id: number; email: string; name?: string };
} | null> {
  // ✅ Credenciais no body via POST, não na URL
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data;
}
