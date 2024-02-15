import styled from "styled-components";

export const Button = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid var(--blue-2);
  background: var(--backgroud);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 2rem;
  right: 3rem;
  z-index: 30;

  @media (max-width: 1250px) {
    right: 1.5rem;
  }
  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
`;
