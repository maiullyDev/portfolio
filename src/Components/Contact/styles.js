import styled from "styled-components";

export const Illustration = styled.img`
  position: absolute;
  bottom: 445px;
  left: 85%;

  @media (max-width: 1250px) {
    height: 350px;
    bottom: 488px;
    left: 87%;
  }
  @media (max-width: 1150px) {
    left: 85%;
  }
  @media (max-width: 1050px) {
    bottom: 488px;
    left: 86%;
  }
  @media (max-width: 975px) {
    bottom: 876px;
    left: 80%;
  }
  @media (max-width: 790px) {
    height: 250px;
    bottom: 910px;
    left: 75%;
  }
  @media (max-width: 570px) {
    bottom: 894px;
  }
  @media (max-width: 540px) {
    bottom: 906px;
  }
  @media (max-width: 500px) {
    bottom: 882px;
    left: 72%;
  }
  @media (max-width: 480px) {
    bottom: 906px;
    left: 70%;
  }
  @media (max-width: 450px) {
    bottom: 906px;
    left: 67%;
  }
  @media (max-width: 420px) {
    bottom: 930px;
    left: 65%;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  gap: 7.5rem;
  max-width: 56rem;
  padding: 53px 90px;
  background: rgba(47, 47, 138, 0.6);
  border-radius: 30px;

  margin: 500px auto 250px auto;

  position: relative;

  @media (max-width: 1250px) {
    margin: 440px auto;
  }
  @media (max-width: 1050px) {
    max-width: 54rem;
  }
  @media (max-width: 975px) {
    max-width: 33rem;
    padding: 53px 60px;
    flex-direction: column;
    gap: 5.5rem;
  }
  @media (max-width: 790px) {
    margin: 350px auto;
  }
  @media (max-width: 570px) {
    max-width: 30rem;
    padding: 50px 60px 40px 60px;
  }
  @media (max-width: 540px) {
    max-width: 28rem;
  }
  @media (max-width: 500px) {
    max-width: 26rem;
    padding: 50px 40px 40px 40px;
    gap: 4rem;
  }
  @media (max-width: 480px) {
    max-width: 24rem;
  }
  @media (max-width: 450px) {
    max-width: 23rem;
  }
  @media (max-width: 420px) {
    max-width: 21rem;
  }
`;

export const LeftBlock = styled.div`
  color: var(--branco);
  font-family: "Poppins", sans-serif;
`;

export const LeftBlockTitle = styled.h2`
  margin-bottom: 1rem;
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export const LeftBlockText = styled.p`
  margin-bottom: 3.5rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-size: 16px;
  font-weight: 400;
`;

export const RightBlock = styled.div`
  color: var(--branco);
  font-family: "Poppins", sans-serif;
`;

export const RightBlockTitle = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 24px;

  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const FormField = styled.input`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px rgba(7, 7, 26, 0.15);

  padding: 0.8rem 1.2rem;
  width: 21rem;

  &::placeholder {
    color: var(--branco);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const FormFieldTextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px rgba(7, 7, 26, 0.15);

  padding: 0.8rem 1.2rem;
  width: 21rem;
  height: 200px;

  &::placeholder {
    color: var(--branco);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const ContactFormButton = styled.button`
  width: 160px;
  height: 40px;
  padding: 10px;

  border: none;
  border-radius: 10px;
  background: linear-gradient(106deg, #c961de 24.79%, #2954a3 71.87%);
  box-shadow: 0px 10px 20px 0px rgba(7, 7, 26, 0.15);

  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;

  @media (max-width: 975px) {
    margin: 0 auto;
    width: 200px;
    margin-top: 1.5rem;
  }
`;
