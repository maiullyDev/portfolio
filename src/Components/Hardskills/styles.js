import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15rem auto;
`;

export const Skills = styled.div`
  border: 2px solid #c962df;
  border-radius: 30px;

  padding: 3rem 3rem;
  max-width: 80rem;

  position: relative;

  margin-bottom: 6rem;
`;

export const LinkToStudyNotebook = styled.a`
  text-decoration: none;

  color: var(--branco);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  transition: border-bottom 0.15s;
  padding-bottom: 3px;

  &:hover {
    border-bottom: 1px solid #fff;
    transition: border-bottom 0.15s;
  }
`;

export const Title = styled.h2`
  color: var(--branco);
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;

  background-color: var(--fundo);
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  position: absolute;
  top: -24px;
`;

export const SkillBlockContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 4rem;
`;

export const Illustration = styled.img`
  height: 12rem;
`;

export const SkillsContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const Skill = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0.5rem 2rem 0.5rem 1rem;
  background-color: rgba(47, 47, 138, 0.6);
  border-radius: 6px;

  max-height: 2.5rem;
`;
