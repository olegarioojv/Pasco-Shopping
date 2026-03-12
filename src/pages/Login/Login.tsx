import { useState, useContext } from "react";

import {
  ActionButton,
  ButtonPrimary,
  ButtonEmail,
  ButtonGoogle,
  Container,
  ContainerBox,
  Divider,
  Input,
  SubTitle,
  Title,
  ButtonSecondary,
  ForgetPassword,
  ContainerInput,
  ContainerLeft,
  ContainerRight,
} from "./Login.styled";

import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Estado de loading para desabilitar o botão durante a requisição
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Mensagem de erro no lugar de alert()
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const success = await signIn(email.trim(), password.trim());

      if (!success) {
        setErrorMessage("Email ou senha inválidos.");
      }
      // Se success === true, redirecione via React Router ou similar
    } catch {
      setErrorMessage("Erro de conexão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <ContainerBox>
        <ContainerLeft>
          <img src="/model_page.png" alt="model" />
        </ContainerLeft>

        <ContainerRight>
          <Title>PASCO</Title>

          <SubTitle>Sign In To PASCO</SubTitle>

          <ActionButton>
            <ButtonGoogle type="button">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                width={16}
              />
              Sign up with Google
            </ButtonGoogle>

            <ButtonEmail type="button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                width={16}
              />
              Sign up with Email
            </ButtonEmail>
          </ActionButton>

          <Divider />

          <form onSubmit={handleLogin}>
            <ContainerInput>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                disabled={isLoading}
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                disabled={isLoading}
                required
              />

              {/* ✅ Erro visível na UI, não em alert() */}
              {errorMessage && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.85rem",
                    margin: "4px 0",
                  }}>
                  {errorMessage}
                </p>
              )}

              <ButtonPrimary type="submit" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Sign In"}
              </ButtonPrimary>

              <ButtonSecondary type="button">Register Now</ButtonSecondary>

              <ForgetPassword>Forgot Password?</ForgetPassword>
            </ContainerInput>
          </form>
        </ContainerRight>
      </ContainerBox>
    </Container>
  );
};

export default Login;
