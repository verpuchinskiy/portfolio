import React from "react";
import styled from "styled-components";
import { secondaryColor, headerFont, primaryColor } from "../../variables";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${primaryColor};
  border-top: 1px solid lightgray;
  font-size: 0.8rem;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 3;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  margin-left: 50px;
  max-width: fit-content;
  font-family: ${headerFont};
  cursor: none;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    color: ${secondaryColor};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0;
  font-weight: 300;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuElement = styled.li`
  padding-bottom: 2px;
  border-bottom: none;
  transition: all 0.05s ease-in;
  &:hover {
    border-bottom: ${primaryColor} 1px solid;
    cursor: pointer;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: ${primaryColor};
`;

const Icons = styled.div`
  display: none;
  justify-content: center;
  padding: 0 50px;
  gap: 40px;

  @media (max-width: 800px) {
    display: flex;
  }

  @media (max-width: 320px) {
    padding: 0
  }
`;

const Link = styled.a`
  cursor: pointer;
  & > * > path {
    fill: ${primaryColor};
  }

  &:hover > * > path {
    fill: ${secondaryColor};
  }
`;

const CopyrightText = styled.div`
  float: inline-end;
  margin-right: 50px;
  color: gray;
  font-size: 0.6rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MV</Logo>
      </Left>
      <Center>
        <Menu>
          <MenuElement>
            <MenuLink href="#home">Home</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#about">About</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#projects">Projects</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#testimonials">Testimonials</MenuLink>
          </MenuElement>
        </Menu>
        <Icons>
          <Link href="tel:+380688688600">
            <CallIcon />
          </Link>
          <Link href="mailto:mike.verpuchinskiy@gmail.com?subject=Job%20Proposal&body=Hi,%20Mike!%20Let's%20work%20together!">
            <MailOutlineIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/verpuchinskiy/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/verpuchinskiy?tab=repositories"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </Icons>
      </Center>
      <Right>
        <CopyrightText>© 2023 Made by M.Verpuchinskiy</CopyrightText>
      </Right>
    </Container>
  );
};
