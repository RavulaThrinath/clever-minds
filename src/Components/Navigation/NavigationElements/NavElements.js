import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarIcons,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SocialIcons,
} from "./ElementsStyle";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { socialMediaLinks } from "../../../Data";

const NavElements = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="./">Home</SidebarLink>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/services">Services</SidebarLink>
            <SidebarLink to="/careers">Career</SidebarLink>
            <SidebarLink to="/contact">Contact</SidebarLink>
          </SidebarMenu>
          <SidebarIcons>
            <SocialIcons href={socialMediaLinks.linkedin} target="_blank">
              <FaFacebookF />
            </SocialIcons>
            <SocialIcons href={socialMediaLinks.insta} target="_blank">
              <AiFillInstagram />
            </SocialIcons>
            <SocialIcons href={socialMediaLinks.linkedin} target="_blank">
              <FaLinkedinIn />
            </SocialIcons>
          </SidebarIcons>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default NavElements;
