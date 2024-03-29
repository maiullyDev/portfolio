import {
  SectionContainer,
  Skills,
  Title,
  SkillBlockContent,
  Illustration,
  SkillsContainer,
  Skill,
  LinkToStudyNotebook,
} from "./styles";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbBrandReactNative, TbBrandSass, TbBrandFigma } from "react-icons/tb";
import { SiStyledcomponents, SiGimp, SiInkscape } from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { BsKanbanFill } from "react-icons/bs";

import illustrationMyVersion from "../../assets/IllustrationMyVersion.svg";

export function Hardskills() {
  return (
    <SectionContainer id="hardSkills">
      <Skills>
        <Title>Hard Skills</Title>
        <SkillBlockContent>
          <Illustration
            src={illustrationMyVersion}
            alt="Desenho de Maiully, uma mulher parda, usando camisa branca e um colar com pingente lilás, com cabelo castanho longo, de braços cruzados e com um leve sorriso."
          />
          <SkillsContainer>
            <Skill>
              <SiInkscape color="#fff" size={13} />
              <p>Inkscape</p>
            </Skill>
            <Skill>
              <SiGimp color="#fff" size={16} />
              <p>Gimp</p>
            </Skill>
            <Skill>
              <SiAdobephotoshop color="#fff" size={16} />
              <p>Photoshop</p>
            </Skill>
            <Skill>
              <SiAdobeillustrator color="#fff" size={16} />
              <p>Illustrator</p>
            </Skill>
            <Skill>
              <FaHtml5 color="#fff" size={15} />
              <p>HTML</p>
            </Skill>
            <Skill>
              <FaCss3Alt color="#fff" size={15} />
              <p>CSS</p>
            </Skill>
            <Skill>
              <IoLogoJavascript color="#fff" size={13} />
              <p>JavaScript</p>
            </Skill>
            <Skill>
              <TbBrandReactNative color="#fff" size={15} />
              <p>React JS</p>
            </Skill>
            <Skill>
              <SiStyledcomponents color="#fff" size={24} />
              <p>Styled Components</p>
            </Skill>
            <Skill>
              <TbBrandSass color="#fff" size={16} />
              <p>Sass</p>
            </Skill>
            <Skill>
              <IoPersonCircleOutline color="#fff" size={16} />
              <p>UI / UX</p>
            </Skill>
            <Skill>
              <IoPersonCircleOutline color="#fff" size={16} />
              <p>Product Design</p>
            </Skill>
            <Skill>
              <TbBrandFigma color="#fff" size={15} />
              <p>Figma</p>
            </Skill>
            <Skill>
              <FaWordpress color="#fff" size={15} />
              <p>WordPress</p>
            </Skill>
            <Skill>
              <BsGit color="#fff" size={14} />
              <p>Git</p>
            </Skill>
            <Skill>
              <BsGithub color="#fff" size={14} />
              <p>GitHub</p>
            </Skill>
            <Skill>
              <DiScrum color="#fff" size={14} />
              <p>Scrum</p>
            </Skill>
            <Skill>
              <BsKanbanFill color="#fff" size={14} />
              <p>Kanban</p>
            </Skill>
          </SkillsContainer>
        </SkillBlockContent>
      </Skills>
      <LinkToStudyNotebook
        href="https://medium.com/@maiullybm7/pethosting-desvendando-op%C3%A7%C3%B5es-de-hospedagem-para-roedores-e-coelhos-5f642659ba09"
        target="_blank"
      >
        Clique aqui para acessar um dos meus projetos de UX e Product Design
      </LinkToStudyNotebook>
    </SectionContainer>
  );
}
