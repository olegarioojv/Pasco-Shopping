import styled from "styled-components";

// 🔥 CONTAINER
export const NavbarContainer = styled.div`
  padding: 20px 80px;
  position: relative;

  @media (max-width: 900px) {
    padding: 20px 30px;
  }
`;

// 🔥 MENU PRINCIPAL
export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 🔥 LOGO
export const NavbarLogo = styled.div`
  img {
    max-height: 30px;
    width: auto;
  }
`;

// 🔥 LINKS
export const NavbarLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    position: relative;
  }

  /* 🔥 LINHA ANIMADA */
  a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: black;
    transition: 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  /* 🔥 LINK ATIVO */
  .active::after {
    width: 100%;
  }

  .active {
    font-weight: bold;
  }

  /* 📱 MOBILE */
  @media (max-width: 900px) {
    display: none;
  }
`;

// 🔥 AÇÕES
export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

// 🔥 BOTÃO
export const NavbarButton = styled.button`
  font-size: 13px;
  color: white;
  background-color: black;
  padding: 10px 25px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }
`;

// 🔥 BOTÃO MOBILE
export const MobileMenuButton = styled.div`
  display: none;
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

// 🔥 MENU MOBILE
export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;

    background-color: white;
    padding: 20px 30px;
    border-top: 1px solid #eee;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }

  .active {
    font-weight: bold;
  }
`;
