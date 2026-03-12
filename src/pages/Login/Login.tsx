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

const Login = () => {
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

          <Divider/>

          <ContainerInput>
            <Input type="email" placeholder="Email" />

            <Input type="password" placeholder="Password" />

            <ButtonPrimary>Sign In</ButtonPrimary>

            <ButtonSecondary>Register Now</ButtonSecondary>

            <ForgetPassword>Forgot Password?</ForgetPassword>
          </ContainerInput>
        </ContainerRight>
      </ContainerBox>
    </Container>
  );
};

export default Login;
