import {
  FooterContainer,
  IllustrationLeft,
  IllustrationRight,
  FooterMenu,
  MenuOption,
  SocialMedia,
  Icon,
  Line,
  FooterBottom,
} from "./styles";

import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoPersonOutline, IoLogoYoutube } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

import illustrationLeft from "../../assets/illustration-left-footer.svg";
import illustrationRight from "../../assets/illustration-right-footer.png";

export function Footer() {
  return (
    <FooterContainer>
      <IllustrationLeft src={illustrationLeft} alt="Ilustração de asteroide" />
      <IllustrationRight
        src={illustrationRight}
        alt="Ilustração de planeta com um anel"
      />
      <FooterMenu>
        <li>
          <MenuOption href="#header">
            <AiOutlineHome color="#fff" size={18} />
            <p>Home</p>
          </MenuOption>
        </li>
        <li>
          <MenuOption href="#hardSkills">
            <GiSkills color="#fff" size={18} />
            <p>Hard skills</p>
          </MenuOption>
        </li>
        <li>
          <MenuOption href="#aboutMe">
            <IoPersonOutline color="#fff" />
            <p>About me</p>
          </MenuOption>
        </li>
        <li>
          <MenuOption href="#projects">
            <MdWork color="#fff" />
            <p>Projects</p>
          </MenuOption>
        </li>
        <li>
          <MenuOption href="#contact">
            <AiOutlinePhone color="#fff" size={18} />
            <p>Contact</p>
          </MenuOption>
        </li>
      </FooterMenu>
      <SocialMedia>
        <a
          href="https://www.linkedin.com/in/maiully-desenvolvimentoweb/"
          target="_blank"
        >
          <Icon>
            <FaLinkedinIn color="#fff" size={22} />
          </Icon>
        </a>
        <a href="https://github.com/maiullyDev" target="_blank">
          <Icon>
            <TbBrandGithubFilled color="#fff" size={22} />
          </Icon>
        </a>
        <a
          href="https://www.youtube.com/channel/UClsISarBf85-ow8KM0d_joA"
          target="_blank"
        >
          <Icon>
            <IoLogoYoutube color="#fff" size={22} />
          </Icon>
        </a>
      </SocialMedia>
      <Line />
      <FooterBottom>Created by Maiully Mendonça</FooterBottom>
    </FooterContainer>
  );
}
