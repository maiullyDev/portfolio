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
              <MenuOption href="">Sobre mim</MenuOption>
            </li>
            <li>
              <MenuOption href="">Projetos</MenuOption>
            </li>
            <li>
              <MenuOption href="">Contato</MenuOption>
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
                <MenuOption href="">Sobre mim</MenuOption>
              </li>
              <li>
                <MenuOption href="">Projetos</MenuOption>
              </li>
              <li>
                <MenuOption href="">Contato</MenuOption>
              </li>
            </BurgerMenuOptions>
          </MobileContent>
        </nav>
      </header>
    </>
  );
}
