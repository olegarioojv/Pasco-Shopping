import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
  ContainerInput,
  ContainerLeft,
  ContainerRight,
  RowInputs,
  LoginLink,
} from "./Register.styled";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    // remover espaços
    const name = firstName.trim();
    const surname = lastName.trim();
    const userEmail = email.trim();
    const userPhone = phone.trim();

    // valida nome
    if (!name) {
      setErrorMessage("O primeiro nome é obrigatório.");
      setIsLoading(false);
      return;
    }

    // valida sobrenome
    if (!surname) {
      setErrorMessage("O sobrenome é obrigatório.");
      setIsLoading(false);
      return;
    }

    // valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail || !emailRegex.test(userEmail)) {
      setErrorMessage("Digite um email válido.");
      setIsLoading(false);
      return;
    }

    // valida telefone
    if (!userPhone) {
      setErrorMessage("O telefone é obrigatório.");
      setIsLoading(false);
      return;
    }

    // valida senha
    if (password.length < 6) {
      setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
      setIsLoading(false);
      return;
    }

    // confirma senha
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não são iguais.");
      setIsLoading(false);
      return;
    }

    const success = await signUp(`${name} ${surname}`, userEmail, password);

    if (success) {
      alert("✅ Usuário cadastrado com sucesso!");
      navigate("/login");
    } else {
      setErrorMessage("Erro ao cadastrar usuário.");
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <ContainerBox>
        <ContainerLeft>
          <img src="/model_register.jpg" alt="model" />
        </ContainerLeft>

        <ContainerRight>
          <Title>FASCO</Title>
          <SubTitle>Create Account</SubTitle>

          <ActionButton>
            <ButtonGoogle>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                width={16}
              />
              Sign up with Google
            </ButtonGoogle>

            <ButtonEmail>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                width={16}
              />
              Sign up with Email
            </ButtonEmail>
          </ActionButton>

          <Divider />

          <form onSubmit={handleRegister}>
            <ContainerInput>
              <RowInputs>
                <Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <Input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </RowInputs>

              <RowInputs>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </RowInputs>

              <RowInputs>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </RowInputs>

              {errorMessage && (
                <p style={{ color: "red", fontSize: "13px" }}>{errorMessage}</p>
              )}

              <ButtonPrimary type="submit" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </ButtonPrimary>

              <LoginLink>
                Already have an account? <a href="/login">Login</a>
              </LoginLink>
            </ContainerInput>
          </form>
        </ContainerRight>
      </ContainerBox>
    </Container>
  );
};

export default Register;
