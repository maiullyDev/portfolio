import styled from "styled-components";

const MenuOption = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;
`;
const NavigationMenu = styled.ul`
  display: flex;
  gap: 7rem;

  padding-top: 3rem;
  padding-right: 5rem;

  list-style: none;
`;

export function Topmenu() {
  return (
    <>
      <header>
        <nav>
          <NavigationMenu>
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
          </NavigationMenu>
        </nav>
      </header>
    </>
  );
}
