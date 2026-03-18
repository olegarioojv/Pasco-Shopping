import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        {/* LOGO */}
        <NavbarLogo>
          <img src="/logo_pasco.png" alt="logo" />
        </NavbarLogo>

        {/* LINKS */}
        <NavbarLinks>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/deals">Deals</NavLink>
          <NavLink to="/new">New Arrivals</NavLink>
          <NavLink to="/packages">Packages</NavLink>
        </NavbarLinks>

        {/* AÇÕES */}
        <NavbarActions>
          <NavLink to="/login">Sign in</NavLink>
          <NavbarButton>Sign Up</NavbarButton>
        </NavbarActions>

        {/* BOTÃO MOBILE */}
        <MobileMenuButton onClick={() => setOpen(!open)}>☰</MobileMenuButton>
      </NavbarMenu>

      {/* MENU MOBILE */}
      {open && (
        <MobileMenu>
          <NavLink to="/home" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/deals" onClick={() => setOpen(false)}>
            Deals
          </NavLink>
          <NavLink to="/new" onClick={() => setOpen(false)}>
            New Arrivals
          </NavLink>
          <NavLink to="/packages" onClick={() => setOpen(false)}>
            Packages
          </NavLink>
          <NavLink to="/login" onClick={() => setOpen(false)}>
            Sign in
          </NavLink>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
