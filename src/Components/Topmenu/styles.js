import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

export const NavList = styled.ul`
  display: flex;
  gap: 7rem;

  padding-top: 3rem;
  padding-right: 5rem;

  list-style: none;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const MenuOption = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: var(--white);

  transition: border-bottom 0.15s;
  padding-bottom: 5px;

  @media (min-width: 1300px) {
    &:hover {
      border-bottom: 1px solid var(--white);
      transition: border-bottom 0.15s;
    }
  }
`;

export const MobileContent = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;

  @media (min-width: 1300px) {
    display: none;
  }
`;

export const StyledHiMenu = styled(HiMenu)`
  height: 2.5rem;
  width: 2.5rem;
  color: #fff;
`;

export const HamburguerMenu = styled.button`
  background: var(--backgroud);
  border: none;
  position: relative;
  z-index: 20;
`;

export const BurgerMenuOptions = styled.ul`
  list-style: none;
  text-align: right;

  padding: 1rem 1rem;

  background: var(--backgroud);
  border: 1.5px solid transparent;
  border-image: linear-gradient(to right, var(--lilac-1), var(--blue-1));
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  display: ${(props) => (props.isOpen ? `flex` : `none`)};
`;
