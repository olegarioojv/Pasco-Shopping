import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  gap: 20px;

  max-width: 1100px;
  width: 100%;

  padding: 30px;
  border-radius: 20px;
  background-color: #f5f5f5;

  margin: auto;

  @media (min-width: 1400px) {
    max-width: 1300px;
    gap: 30px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1.2fr 1fr;
    max-width: 1000px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: #e5e5e5;
  border-radius: 20px;
  padding: 20px;

  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopImage = styled.img`
  width: 100%;
  border-radius: 20px;
  background-color: #e5e5e5;
  padding: 10px;
  object-fit: cover;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 10px;

  h1 {
    font-size: 28px;
    letter-spacing: 3px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 70px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    line-height: 1;

    @media (max-width: 900px) {
      font-size: 55px;
    }

    @media (max-width: 600px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 11px;
    letter-spacing: 3px;

    @media (max-width: 600px) {
      font-size: 10px;
    }
  }

  button {
    margin-top: 10px;
    padding: 12px 28px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 600px) {
      padding: 10px 20px;
      font-size: 12px;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const BottomImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
