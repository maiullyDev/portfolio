import styled from "styled-components";

export const MyProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16rem auto;
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
`;

export const ProjectsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
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
`;

export const WebsiteImage = styled.img`
  height: 60%;
  margin-top: 30px;
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
`;
