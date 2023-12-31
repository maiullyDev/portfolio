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
              <p>React</p>
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
              <IoPersonCircleOutline color="#fff" size={16} />
              <p>UI / UX</p>
            </Skill>
            <Skill>
              <TbBrandFigma color="#fff" size={15} />
              <p>Figma</p>
            </Skill>
            <Skill>
              <TbBrandSass color="#fff" size={16} />
              <p>Sass</p>
            </Skill>
            <Skill>
              <SiStyledcomponents color="#fff" size={24} />
              <p>Styled Components</p>
            </Skill>
            <Skill>
              <SiGimp color="#fff" size={16} />
              <p>Gimp</p>
            </Skill>
            <Skill>
              <SiInkscape color="#fff" size={13} />
              <p>Inkscape</p>
            </Skill>
          </SkillsContainer>
        </SkillBlockContent>
      </Skills>
      <LinkToStudyNotebook
        href="https://crystal-haumea-eb9.notion.site/Full-stack-4b034e95b05346a7a9a1bb569deef26a?pvs=4"
        target="_blank"
      >
        Tenha acesso ao meu caderno de estudos clicando aqui
      </LinkToStudyNotebook>
    </SectionContainer>
  );
}
