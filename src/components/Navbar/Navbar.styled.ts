import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 20px 80px;

  @media (max-width: 900px) {
    padding: 20px 30px;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogo = styled.div`
  img {
    max-height: 22px;
    width: auto;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    position: relative;
  }

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

  @media (max-width: 900px) {
    display: none;
  }
`;

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

export const MobileMenuButton = styled.div`
  display: none;
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;

    background: #f5f5f5;
    padding: 20px 30px;
    border-top: 1px solid #eee;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
`;
