import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  margin: 15rem auto;

  @media (max-width: 1250px) {
    margin: 10rem auto;
  }
  @media (max-width: 1100px) {
    margin: 8rem auto;
  }
  @media (max-width: 1000px) {
    margin: 8rem auto 6rem auto;
  }
  @media (max-width: 540px) {
    margin: 8rem auto 4rem auto;
  }
  @media (max-width: 450px) {
    margin: 8rem auto 1rem auto;
  }
`;

export const Skills = styled.div`
  border: 3px solid #c962df;
  border-radius: 30px;

  padding: 3rem 3rem;
  max-width: 80rem;

  position: relative;

  margin-bottom: 6rem;

  @media (max-width: 1380px) {
    max-width: 75rem;
  }
  @media (max-width: 1350px) {
    max-width: 70rem;
  }
  @media (max-width: 1250px) {
    max-width: 65rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 1200px) {
    max-width: 60rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 1100px) {
    max-width: 56rem;
  }
  @media (max-width: 1000px) {
    max-width: 50rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 900px) {
    max-width: 45rem;
  }
  @media (max-width: 830px) {
    max-width: 43rem;
  }
  @media (max-width: 800px) {
    max-width: 40rem;
  }
  @media (max-width: 730px) {
    max-width: 38rem;
  }
  @media (max-width: 690px) {
    max-width: 35rem;
  }
  @media (max-width: 620px) {
    max-width: 32rem;
  }
  @media (max-width: 570px) {
    max-width: 30rem;
    width: 100%;
    padding: 3rem 0rem;
  }
  @media (max-width: 540px) {
    max-width: 28rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    max-width: 27rem;
  }
  @media (max-width: 480px) {
    max-width: 25rem;
  }
  @media (max-width: 450px) {
    max-width: 23rem;
  }
  @media (max-width: 420px) {
    max-width: 21rem;
  }
`;

export const LinkToStudyNotebook = styled.a`
  text-decoration: none;

  color: var(--white);
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

  @media (max-width: 570px) {
    max-width: 60%;
  }
  @media (max-width: 620px) {
    max-width: 50%;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;

  background-color: var(--backgroud);
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  position: absolute;
  top: -24px;

  @media (max-width: 570px) {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    left: 30px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
    top: -16px;
  }
  @media (max-width: 480px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const SkillBlockContent = styled.div`
  display: flex;
  align-items: center;

  gap: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Illustration = styled.img`
  height: 12rem;

  @media (max-width: 540px) {
    height: 10rem;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 570px) {
    flex-wrap: nowrap;
    flex-direction: column;
    width: 80%;
  }
`;

export const Skill = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0.5rem 2rem 0.5rem 1rem;
  background-color: rgba(47, 47, 138, 0.6);
  border-radius: 6px;

  max-height: 2.5rem;

  @media (max-width: 570px) {
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;
