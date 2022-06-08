import React, { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";
// import Mainlogo from "../../Assets/Main Logo.svg";
import { IconContext } from "react-icons/lib";
import {
  NavbarContainer,
  Nav,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavbarLogo1,
  // LogoImage,
} from "./NavigationStyle";

const MainNavbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 10) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo1 to="/">
            <h2
              style={{ color: "#3588A3", fontWeight: "600", fontSize: "27px" }}
            >
              Logo
            </h2>
          </NavbarLogo1>
          <MobileIcon onClick={toggle}>
            <List />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="./">Home</NavLinks>
              <NavLinks to="./about">About</NavLinks>
              <NavLinks to="./services">Services</NavLinks>
              <NavLinks to="./careers">Career</NavLinks>
              <NavLinks to="./contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default MainNavbar;
