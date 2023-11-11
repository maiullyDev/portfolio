import {
  NavList,
  MenuOption,
  MobileContent,
  BurgerMenuOptions,
  HamburguerMenu,
  StyledHiMenu,
} from "./styles";

import React, { useState } from "react";

export function Topmenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <MenuOption href="">Home</MenuOption>
            </li>
            <li>
              <MenuOption href="#hardSkills">Hard Skills</MenuOption>
            </li>
            <li>
              <MenuOption href="#aboutMe">About me</MenuOption>
            </li>
            <li>
              <MenuOption href="#projects">Projects</MenuOption>
            </li>
            <li>
              <MenuOption href="#contact">Contact</MenuOption>
            </li>
          </NavList>
          <MobileContent>
            <HamburguerMenu onClick={toggleMenu}>
              <StyledHiMenu />
            </HamburguerMenu>
            <BurgerMenuOptions isOpen={menuOpen}>
              <li>
                <MenuOption href="">Home</MenuOption>
              </li>
              <li>
                <MenuOption href="#hardSkills">Hard Skills</MenuOption>
              </li>
              <li>
                <MenuOption href="#aboutMe">About me</MenuOption>
              </li>
              <li>
                <MenuOption href="#projects">Projects</MenuOption>
              </li>
              <li>
                <MenuOption href="#contact">Contact</MenuOption>
              </li>
            </BurgerMenuOptions>
          </MobileContent>
        </nav>
      </header>
    </>
  );
}
