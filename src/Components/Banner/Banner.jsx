import styled from "styled-components";
import { Topmenu } from "../Topmenu/Topmenu";
import illustrationTop from "../../assets/IllustrationTopBanner.svg";
import illustrationBottom from "../../assets/IllustrationBottomBanner.svg";

const SectionBanner = styled.section`
  position: relative;
  background-color: #0f103f;
  height: 100vh;
`;

const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IllustrationRight = styled.img`
  position: absolute;
  top: 15%;
  right: 0;
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  max-width: 65rem;
  padding-left: 15%;

  position: relative;
  z-index: 1;
  bottom: 10%;
`;

const PresentationText = styled.h1`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;

  z-index: 1;
`;

const ButtonCurriculum = styled.button`
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  width: 12.5rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(107deg, #c961de 24.43%, #2954a3 68.95%);
  box-shadow: 0px 10px 20px 0px rgba(8, 12, 33, 0.15);

  z-index: 1;
`;

const BlurEffect = styled.div`
  width: 62.5rem;
  height: 62.5rem;
  background: radial-gradient(
    62.52% 62.52% at 44% 40.5%,
    rgba(41, 84, 163, 0.8) 0%,
    rgba(15, 16, 63, 0.8) 100%
  );
  border-radius: 100%;
  filter: blur(10rem);
  position: absolute;
  top: -15rem;
  z-index: 0;
`;

export function Banner() {
  return (
    <>
      <SectionBanner>
        <BannerTop>
          <img src={illustrationTop} alt="" />
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
