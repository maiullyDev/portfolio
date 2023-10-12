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
          <IllustrationLeft src={illustrationTop} alt="" />
          <Topmenu />
        </BannerTop>
        <IllustrationRight src={illustrationBottom} alt="" />
        <CallToAction>
          <PresentationText>
            Olá! Eu me chamo Maiully, mas também sou conhecida por Mai!
          </PresentationText>
          <ButtonCurriculum>Baixar Currículo</ButtonCurriculum>
          <BlurEffect></BlurEffect>
        </CallToAction>
      </SectionBanner>
    </>
  );
}
