import {
  MyProjectsContainer,
  TitleSection,
  ProjectsContainer,
  ProjectContainer,
  TitleProject,
} from "./styles";
import { IoMdPlanet } from "react-icons/io";

export function Myprojects() {
  return (
    <MyProjectsContainer id="projects">
      <TitleSection>
        <IoMdPlanet size={60} />
        <h2>My projects</h2>
      </TitleSection>
      <ProjectsContainer>
        <ProjectContainer>
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
      </ProjectsContainer>
    </MyProjectsContainer>
  );
}
