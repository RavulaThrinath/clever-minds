import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "1px 1px 5px #00000020" : "none"};
  @media screen and (max-width: 768px) {
    height: 70px;
  }
  @media screen and (max-width: 960px) {
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width: 500px) {
    padding: 0 25px;
  }
`;

export const NavbarLogo1 = styled(LinkR)`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 110px;
    padding: 0;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 110px;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 13%);
    align-items: center;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled(LinkS)`
  color: #222;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: all.2s ease-in-out;
  &:hover {
    color: #3588A3;
  }
`;
