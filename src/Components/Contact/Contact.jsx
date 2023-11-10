import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import IllustrationMyVersion from "../../assets/MyVersionComputer.svg";
import {
  ContactContainer,
  Illustration,
  LeftBlock,
  LeftBlockTitle,
  LeftBlockText,
  SocialMedia,
  Linkedin,
  RightBlock,
  RightBlockTitle,
  ContactForm,
  FormField,
  FormFieldTextArea,
  ContactFormButton,
} from "./styles";

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem,
    };

    emailjs
      .send(
        "service_2uh7jba",
        "template_w4plbme",
        templateParams,
        "f5tTPX4znb1DrQjcW"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setNome("");
          setEmail("");
          setMensagem("");
        },
        (error) => {
          console.log("Erro: ", error);
        }
      );
  }

  return (
    <ContactContainer>
      <Illustration src={IllustrationMyVersion} alt="" />
      <LeftBlock>
        <LeftBlockTitle>Entrar em contato</LeftBlockTitle>
        <LeftBlockText>
          Estou muito feliz pela sua visita ao meu portfólio, e adoraria falar
          com você! Sinta-se à vontade para entrar em contato por meio do
          LinkedIn, por e-mail, ou simplesmente preenchendo o formulário de
          contato.
        </LeftBlockText>
        <SocialMedia>
          <Linkedin href="https://www.linkedin.com/in/maiully-desenvolvedorweb/">
            <BsLinkedin color="#fff" size={18} />
            <p>LinkedIn</p>
          </Linkedin>
        </SocialMedia>
        <SocialMedia style={{ marginLeft: "-2px" }}>
          <MdEmail color="#fff" size={21} />
          <p>maiully.dev@gmail.com</p>
        </SocialMedia>
      </LeftBlock>
      <RightBlock>
        <RightBlockTitle>Mande uma mensagem</RightBlockTitle>
        <ContactForm onSubmit={sendEmail}>
          <FormField
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <FormField
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <FormFieldTextArea
            cols="30"
            rows="10"
            placeholder="Sua mensagem"
            onChange={(e) => setMensagem(e.target.value)}
            value={mensagem}
          ></FormFieldTextArea>
          <ContactFormButton>Enviar mensagem</ContactFormButton>
        </ContactForm>
      </RightBlock>
    </ContactContainer>
  );
}
