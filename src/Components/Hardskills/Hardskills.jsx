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

import illustrationMyVersion from "../../assets/IllustrationMyVersion.svg";

export function Hardskills() {
  return (
    <SectionContainer>
      <Skills>
        <Title>Hard Skills</Title>
        <SkillBlockContent>
          <Illustration src={illustrationMyVersion} alt="" />
          <SkillsContainer>
            <Skill>
              <FaHtml5 color="#fff" />
              <p>HTML</p>
            </Skill>
            <Skill>
              <FaCss3Alt color="#fff" />
              <p>CSS</p>
            </Skill>
            <Skill>
              <IoLogoJavascript color="#fff" />
              <p>JavaScript</p>
            </Skill>
            <Skill>
              <TbBrandReactNative color="#fff" />
              <p>React</p>
            </Skill>
            <Skill>
              <BsGit color="#fff" />
              <p>Git</p>
            </Skill>
            <Skill>
              <BsGithub color="#fff" />
              <p>GitHub</p>
            </Skill>
            <Skill>
              <IoPersonCircleOutline color="#fff" />
              <p>UI / UX</p>
            </Skill>
            <Skill>
              <TbBrandFigma color="#fff" />
              <p>Figma</p>
            </Skill>
            <Skill>
              <TbBrandSass color="#fff" />
              <p>Sass</p>
            </Skill>
            <Skill>
              <SiStyledcomponents color="#fff" />
              <p>Styled Components</p>
            </Skill>
            <Skill>
              <SiGimp color="#fff" />
              <p>Gimp</p>
            </Skill>
            <Skill>
              <SiInkscape color="#fff" />
              <p>Inkscape</p>
            </Skill>
          </SkillsContainer>
        </SkillBlockContent>
      </Skills>
      <LinkToStudyNotebook href="">
        Tenha acesso ao meu caderno de estudos clicando aqui
      </LinkToStudyNotebook>
    </SectionContainer>
  );
}
