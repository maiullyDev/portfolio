import { Topmenu } from "../Topmenu/Topmenu";
import illustrationTop from "../../assets/IllustrationTopBanner.svg";
import illustrationBottom from "../../assets/IllustrationBottomBanner.svg";
import {
  SectionBanner,
  BannerTop,
  IllustrationLeft,
  IllustrationRight,
  CallToAction,
  PresentationText,
  ButtonCurriculum,
  BlurEffect,
} from "./styles";

export function Banner() {
  return (
    <>
      <SectionBanner>
        <BannerTop>
          <IllustrationLeft src={illustrationTop} alt="Ilustração de planeta" />
          <Topmenu />
        </BannerTop>
        <IllustrationRight
          src={illustrationBottom}
          alt="Ilustração de planeta com luas"
        />
        <CallToAction>
          <PresentationText>
            Olá! Eu me chamo Maiully, mas também sou conhecida por Mai!
          </PresentationText>
          <a
            href="https://drive.google.com/file/d/1Gt5JETEKH0QI2eaugCx5Gdb0J_wGfeRK/view?usp=sharing"
            target="_blank"
          >
            <ButtonCurriculum>Baixar Currículo</ButtonCurriculum>
          </a>
          <BlurEffect></BlurEffect>
        </CallToAction>
      </SectionBanner>
    </>
  );
}
