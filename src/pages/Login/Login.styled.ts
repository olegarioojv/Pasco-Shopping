import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;

  padding: 20px;
`;

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 950px;
  max-height: 560px;

  display: grid;
  grid-template-columns: 50% 50%;

  background: white;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-height: none;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  padding: 40px;
  padding-bottom: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #666;
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
  border-radius: 5px;

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
  border-radius: 5px;

  background: white;
  cursor: pointer;

  font-size: 12px;
`;

export const Divider = styled.hr`
  width: 60%;
  border: none;
  border-top: 1px solid #ddd;
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
  border-radius: 4px;

  cursor: pointer;
`;

export const ButtonSecondary = styled.button`
  background: transparent;
  color: #4a7cff;

  border: 1px solid #4a7cff;
  border-radius: 4px;

  padding: 10px;

  cursor: pointer;
`;

export const ForgetPassword = styled.a`
  font-size: 12px;
  color: #4a7cff;

  text-align: right;
  cursor: pointer;
`;
