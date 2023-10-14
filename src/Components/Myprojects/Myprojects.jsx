import {
  MyProjectsContainer,
  TitleSection,
  ProjectsContainer,
  ProjectContainer,
  WebsiteImage,
  TitleProject,
} from "./styles";
import imgsite from "../../assets/site.jpeg";
import { IoMdPlanet } from "react-icons/io";

export function Myprojects() {
  return (
    <MyProjectsContainer>
      <TitleSection>
        <IoMdPlanet size={60} />
        <h2>My projects</h2>
      </TitleSection>
      <ProjectsContainer>
        <ProjectContainer>
          <WebsiteImage src={imgsite} alt="" />
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <WebsiteImage src={imgsite} alt="" />
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <WebsiteImage src={imgsite} alt="" />
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
      </ProjectsContainer>
    </MyProjectsContainer>
  );
}
