import styled from "styled-components";

export const MyProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16rem 3rem;

  @media (max-width: 975px) {
    margin: 10rem 3rem;
  }
`;

export const TitleSection = styled.div`
  color: var(--branco);
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 975px) {
    font-size: 20px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 975px) {
    max-width: 505px;
  }
  @media (max-width: 620px) {
    max-width: 240px;
  }
`;

export const ProjectContainer = styled.div`
  width: 22rem;
  height: 17rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(181, 249, 253, 0.42);
  }

  @media (max-width: 1300px) {
    width: 20rem;
    height: 15rem;

    border-radius: 1.3rem;
  }
  @media (max-width: 1150px) {
    width: 18rem;
    height: 13rem;
  }
  @media (max-width: 1050px) {
    width: 17rem;
    height: 12rem;
  }
  @media (max-width: 975px) {
    width: 15rem;
    height: 10rem;
  }
`;

export const WebsiteImage = styled.img`
  height: 60%;
  margin-top: 30px;

  @media (max-width: 1300px) {
    height: 55%;
  }
  @media (max-width: 975px) {
    margin-top: 20px;
  }
`;

export const TitleProject = styled.p`
  text-align: center;

  color: var(--branco);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;

  width: 22rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0rem 0rem 1.5rem 1.5rem;

  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  position: absolute;
  bottom: 0px;

  @media (max-width: 1300px) {
    width: 20rem;
    border-radius: 0rem 0rem 1.3rem 1.3rem;
  }
  @media (max-width: 1150px) {
    width: 18rem;
  }
  @media (max-width: 1050px) {
    width: 17rem;
  }
  @media (max-width: 975px) {
    width: 15rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
`;
