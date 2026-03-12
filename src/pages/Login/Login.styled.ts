import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;

  padding: 40px 20px;

  @media (max-height: 800px) {
    padding: 20px;
  }
`;

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 1000px;

  display: grid;
  grid-template-columns: 50% 50%;

  background: white;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-height: 800px) {
    max-width: 900px;
  }
`;

export const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  padding: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-height: 800px) {
    padding: 30px 40px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-height: 800px) {
    font-size: 26px;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #555;
`;

export const ActionButton = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ButtonGoogle = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 8px;

  border: 1px solid #ddd;
  border-radius: 4px;

  background: white;
  cursor: pointer;

  font-size: 12px;
`;

export const ButtonEmail = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 8px;

  border: 1px solid #ddd;
  border-radius: 4px;

  background: white;
  cursor: pointer;

  font-size: 12px;
`;

export const Divider = styled.hr`
  width: 60%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px auto;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;

  padding: 10px 5px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

export const ButtonPrimary = styled.button`
  background: black;
  color: white;

  padding: 10px;

  border: none;
  border-radius: 3px;

  cursor: pointer;
`;

export const ButtonSecondary = styled.button`
  background: transparent;
  color: #5b86e5;

  border: 1px solid #5b86e5;
  border-radius: 3px;

  padding: 10px;

  cursor: pointer;
`;

export const ForgetPassword = styled.a`
  font-size: 12px;
  color: #5b86e5;

  text-align: right;
  cursor: pointer;
`;
