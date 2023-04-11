import React, { useState } from "react";
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

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 3;

  @media (max-width: 800px) {
    flex: 1;
    height: 100%;
    margin-top: 64px;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 1;

  @media (max-width: 800px) {
  }
`;

const Logo = styled.h1`
  margin: 0 50px;
  max-width: fit-content;
  font-family: ${headerFont};
  padding: 0;
  transition: all 0.3s ease;
  cursor: none;

  &:hover {
    color: ${secondaryColor};
  }

  @media (max-width: 800px) {
    margin: 0 30px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  @media (max-width: 800px) {
    position: relative;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 0;
    background-color: white;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-500px)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    z-index: 5;
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

  @media (max-width: 800px) {
    background-color: white;
    z-index: 5;
    padding: 40px 20px;

    &:hover {
      border-bottom: none;
    }
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: ${primaryColor};
`;

const HamburgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  padding: 20px 0;
  position: relative;
  width: 30px;
  height: 22px;
  background: white;
  border: none;
  cursor: pointer;
  z-index: 9;
`;

const MobileMenuLine = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    top: ${({ open }) => (open ? "9px" : 0)};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    top: 9px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  &:nth-child(3) {
    top: ${({ open }) => (open ? "9px" : "18px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
  gap: 30px;

  @media (max-width: 800px) {
    padding: 0;
    display: none;
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

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer -
      setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
  });

  return (
    <Container>
      <Left>
        <Logo>MV</Logo>
      </Left>
      <Center>
        <HamburgerMenuWrapper>
          <MobileMenuButton onClick={handleClick}>
            <MobileMenuLine open={open} />
            <MobileMenuLine open={open} />
            <MobileMenuLine open={open} />
          </MobileMenuButton>
        </HamburgerMenuWrapper>
        <Menu open={open}>
          <MenuElement>
            <MenuLink href="#home" onClick={() => setOpen(false)}>
              Home
            </MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#about" onClick={() => setOpen(false)}>About</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#projects" onClick={() => setOpen(false)}>Projects</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink href="#testimonials" onClick={() => setOpen(false)}>Testimonials</MenuLink>
          </MenuElement>
        </Menu>
      </Center>
      <Right>
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
      </Right>
    </Container>
  );
};
