import {
  MyProjectsContainer,
  TitleSection,
  ProjectsContainer,
  ProjectContainer,
  ImgProjectContainer,
  TitleProject,
} from "./styles";
import { IoMdPlanet } from "react-icons/io";
import astronaut from "../../assets/astronaut.png";

export function Myprojects() {
  return (
    <MyProjectsContainer id="projects">
      <TitleSection>
        <IoMdPlanet size={60} />
        <h2>My projects</h2>
      </TitleSection>
      <ProjectsContainer>
        <ProjectContainer
          href="https://github.com/maiullyDev/my-finances"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/maiullyDev/my-finances/raw/main/assets/capturaDeTela.png"
            alt="Imagem do projeto"
          />
          <TitleProject>My finances</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <ImgProjectContainer src={astronaut} />
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
        <ProjectContainer>
          <ImgProjectContainer src={astronaut} />
          <TitleProject>Em desenvolvimento</TitleProject>
        </ProjectContainer>
      </ProjectsContainer>
    </MyProjectsContainer>
  );
}
