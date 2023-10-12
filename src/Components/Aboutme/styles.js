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
`;

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem 6rem 4rem 6rem;

  width: 56rem;

  border-radius: 30px;
  border: 3px solid #bf61db;

  background: rgba(0, 0, 0, 0.5);

  position: relative;
`;

export const Picture = styled.img`
  width: 95px;
  height: 100px;
  border-radius: 200px;

  margin-bottom: 2.5rem;
`;

export const TextTitle = styled.h2`
  color: var(--branco);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 5rem;
`;

export const BodyOfText = styled.div`
  color: var(--branco);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 170%;

  max-width: 729px;
`;

export const TextParagraph = styled.p`
  margin-bottom: 0.5rem;
`;

export const ContrastText = styled.span`
  color: var(--lilac-1);
`;
