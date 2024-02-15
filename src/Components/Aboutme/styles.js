import styled from "styled-components";

export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url("/BackgroundCircle.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  position: relative;

  padding-top: 5rem;
  margin-top: 200px;

  @media (max-width: 1000px) {
    margin-top: 120px;
  }
  @media (max-width: 1300px) {
    background-size: 98%;
  }
  @media (max-width: 1350px) {
    margin-top: 100px;
  }
  @media (max-width: 1200px) {
    background: none;
  }
  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const BlurEffect = styled.div`
  width: 35rem;
  height: 35rem;
  background: radial-gradient(
    62.52% 62.52% at 44% 40.5%,
    rgba(41, 84, 163, 0.8) 70%,
    rgba(15, 16, 63, 0.8) 100%
  );
  border-radius: 100%;
  filter: blur(4rem);
  position: absolute;
  bottom: 30rem;

  @media (max-width: 1350px) {
    width: 25rem;
    height: 25rem;
  }
  @media (max-width: 1200px) {
    background: none;
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem 6rem 4rem 6rem;

  max-width: 56rem;

  border-radius: 30px;
  border: 3px solid var(--lilac-1);

  background: rgba(0, 0, 0, 0.5);

  position: relative;

  @media (max-width: 1000px) {
    max-width: 50rem;
    padding: 3rem 6rem 2.6rem 6rem;
  }
  @media (max-width: 900px) {
    max-width: 45rem;
    padding: 3rem 3.6rem 2.6rem 3.6rem;
  }
  @media (max-width: 830px) {
    max-width: 43rem;
    padding: 3rem 3.4rem 2.6rem 3.4rem;
  }
  @media (max-width: 800px) {
    max-width: 40rem;
    padding: 3rem 3.2rem 2rem 3.2rem;
  }
  @media (max-width: 730px) {
    max-width: 38rem;
    padding: 3rem 3rem 2rem 3rem;
  }
  @media (max-width: 690px) {
    max-width: 35rem;
    padding: 3rem 2.5rem 2rem 2.5rem;
  }
  @media (max-width: 620px) {
    max-width: 32rem;
    padding: 3rem 2.5rem 1.8rem 2.5rem;
  }
  @media (max-width: 570px) {
    max-width: 30rem;
    padding: 3rem 2rem 1.8rem 2rem;
  }
  @media (max-width: 540px) {
    max-width: 28rem;
    padding: 3rem 1.8rem 1.8rem 1.8rem;
  }
  @media (max-width: 500px) {
    max-width: 27rem;
    padding: 3rem 1.8rem 1.6rem 1.8rem;
  }
  @media (max-width: 480px) {
    max-width: 25rem;
    padding: 3rem 1.5rem 1.6rem 1.5rem;
  }
  @media (max-width: 450px) {
    max-width: 23rem;
    padding: 3rem 1.5rem 1.4rem 1.5rem;
  }
  @media (max-width: 420px) {
    max-width: 21rem;
    padding: 3rem 1.5rem 1rem 1.5rem;
  }
`;

export const Picture = styled.img`
  width: 95px;
  height: 100px;
  border-radius: 200px;

  margin-bottom: 2.5rem;
`;

export const TextTitle = styled.h2`
  color: var(--white);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 5rem;

  @media (max-width: 1000px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 900px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 800px) {
    margin-bottom: 2.5rem;
  }
  @media (max-width: 570px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 540px) {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
`;

export const BodyOfText = styled.div`
  max-width: 729px;
`;

export const TextParagraph = styled.p`
  color: var(--white);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 170%;

  margin-bottom: 0.5rem;

  @media (max-width: 730px) {
    font-size: 18px;
  }
  @media (max-width: 620px) {
    font-size: 16px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

export const ContrastText = styled.span`
  color: var(--lilac-1);
`;
