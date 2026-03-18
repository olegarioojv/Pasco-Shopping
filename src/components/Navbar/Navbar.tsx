import { useState } from "react";
import {
  NavbarContainer,
  NavbarMenu,
  NavbarLogo,
  NavbarLinks,
  NavbarActions,
  NavbarButton,
  MobileMenuButton,
  MobileMenu,
} from "./Navbar.styled";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarMenu>
        <NavbarLogo>
          <img src="/logo_pasco.png" alt="logo" />
        </NavbarLogo>

        <NavbarLinks>
          <a href="#">Home</a>
          <a href="#">Deals</a>
          <a href="#">New Arrivals</a>
          <a href="#">Packages</a>
        </NavbarLinks>

        <NavbarActions>
          <a href="#">Sign in</a>
          <NavbarButton>Sign Up</NavbarButton>
        </NavbarActions>

        <MobileMenuButton onClick={() => setOpen(!open)}>☰</MobileMenuButton>
      </NavbarMenu>

      {open && (
        <MobileMenu>
          <a href="#">Home</a>
          <a href="#">Deals</a>
          <a href="#">New Arrivals</a>
          <a href="#">Packages</a>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
