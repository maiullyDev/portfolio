import styled from "styled-components";

export const SectionBanner = styled.section`
  position: relative;
  background-color: var(--backgroud);
  height: 100vh;
`;

export const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IllustrationLeft = styled.img`
  @media (max-width: 1230px) {
    height: 380px;
  }
  @media (max-width: 1000px) {
    height: 350px;
  }
  @media (max-width: 785px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
`;

export const IllustrationRight = styled.img`
  position: absolute;
  top: 15%;
  right: 0;

  @media (max-width: 1230px) {
    width: 700px;

    top: 30%;
  }
  @media (max-width: 1000px) {
    width: 600px;

    top: 40%;
  }
  @media (max-width: 785px) {
    width: 550px;

    top: 50%;
  }
  @media (max-width: 600px) {
    width: 450px;

    top: 58%;
  }
  @media (max-width: 450px) {
    width: 350px;

    top: 65%;
  }
  @media (max-width: 410px) {
    width: 300px;

    top: 70%;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  max-width: 65rem;
  padding-left: 15%;

  position: relative;
  z-index: 1;
  bottom: 10%;

  @media (max-width: 1230px) {
    max-width: 53rem;
    padding-left: 10%;

    top: 0;
  }
  @media (max-width: 1000px) {
    max-width: 45rem;
    padding-left: 10%;

    top: 1px;
  }
  @media (max-width: 785px) {
    max-width: 35rem;
    padding-left: 8%;

    top: 100px;
  }
  @media (max-width: 600px) {
    max-width: 28rem;
    padding-left: 8%;

    top: 100px;
  }
  @media (max-width: 490px) {
    top: 80px;
  }
  @media (max-width: 450px) {
    max-width: 22rem;
    padding-left: 8%;

    top: 100px;
  }
  @media (max-width: 410px) {
    max-width: 20rem;
    padding-left: 8%;

    top: 120px;
  }
`;

export const PresentationText = styled.h1`
  color: var(--white);
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;

  z-index: 1;

  @media (max-width: 1230px) {
    font-size: 3.5rem;
  }
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: 785px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
  @media (max-width: 410px) {
    font-size: 1.4rem;
  }
`;

export const ButtonCurriculum = styled.button`
  color: var(--white);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;

  width: 12.5rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(
    107deg,
    var(--lilac-1) 24.43%,
    var(--blue-1) 68.95%
  );
  box-shadow: 0px 10px 20px 0px rgba(8, 12, 33, 0.15);

  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const BlurEffect = styled.div`
  width: 50rem;
  height: 50rem;
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

  @media (max-width: 1230px) {
    width: 55rem;
    height: 55rem;
  }
  @media (max-width: 1000px) {
    width: 40rem;
    height: 40rem;
    top: -8rem;
  }
  @media (max-width: 714px) {
    width: 30rem;
    height: 30rem;
    top: -5rem;
  }
  @media (max-width: 490px) {
    width: 0rem;
    height: 0rem;
  }
`;
