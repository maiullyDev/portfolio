import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: var(--backgroud-footer);
  padding-top: 8rem;
  padding-bottom: 2rem;

  position: relative;

  @media (max-width: 680px) {
    padding-top: 4rem;
  }
`;

export const IllustrationLeft = styled.img`
  position: absolute;
  bottom: 5rem;

  @media (max-width: 1430px) {
    left: -100px;
  }
  @media (max-width: 1330px) {
    height: 750px;
    bottom: 6rem;
  }
  @media (max-width: 1260px) {
    height: 700px;
    padding-left: 30px;
  }
  @media (max-width: 1200px) {
    bottom: 8rem;
  }
  @media (max-width: 975px) {
    height: 600px;
    bottom: 10rem;
  }
  @media (max-width: 680px) {
    height: 400px;
    bottom: 15rem;
    padding-left: 50px;
  }
  @media (max-width: 584px) {
    bottom: 18rem;
  }
  @media (max-width: 514px) {
    bottom: 22rem;
  }
`;

export const IllustrationRight = styled.img`
  position: absolute;
  bottom: 15rem;
  right: 2%;

  @media (max-width: 1430px) {
    right: 1%;
  }
  @media (max-width: 1330px) {
    height: 200px;
  }
  @media (max-width: 1260px) {
    height: 150px;
    bottom: 18rem;
  }
  @media (max-width: 680px) {
    height: 100px;
    bottom: 19rem;
  }
  @media (max-width: 514px) {
    bottom: 32rem;
    right: 4%;
  }
  @media (max-width: 425px) {
    height: 80px;
  }
  @media (max-width: 392px) {
    bottom: 43rem;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;

  max-width: 53rem;
  margin: 0rem auto 3rem auto;

  position: relative;
  z-index: 4;

  @media (max-width: 680px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 6rem 0rem 6rem;
    gap: 1rem;
  }
`;

export const MenuOption = styled.a`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  text-decoration: none;
  color: var(--white);
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 400;

  @media (max-width: 680px) {
    gap: 0.4rem;
  }
  @media (max-width: 584px) {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  max-width: 250px;
  margin: 0rem auto 3rem auto;

  position: relative;
  z-index: 3;
`;

export const Icon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
`;

export const Line = styled.hr`
  border: none;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
`;

export const FooterBottom = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;

  display: flex;
  justify-content: center;

  margin-top: 1.5rem;
`;
