import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  ContactContainer,
  LeftBlock,
  LeftBlockTitle,
  LeftBlockText,
  SocialMedia,
  RightBlock,
  RightBlockTitle,
  ContactForm,
  FormField,
  FormFieldTextArea,
  ContactFormButton,
} from "./styles";

export function Contact() {
  return (
    <ContactContainer>
      <LeftBlock>
        <LeftBlockTitle>Entrar em contato</LeftBlockTitle>
        <LeftBlockText>
          Estou muito feliz pela sua visita ao meu portfólio, e adoraria falar
          com você! Sinta-se à vontade para entrar em contato por meio do
          LinkedIn, por e-mail, ou simplesmente preenchendo o formulário de
          contato.
        </LeftBlockText>
        <SocialMedia>
          <BsLinkedin color="#fff" size={18} />
          <p>LinkedIn</p>
        </SocialMedia>
        <SocialMedia>
          <MdEmail color="#fff" size={21} />
          <p>maiully.dev@gmail.com</p>
        </SocialMedia>
      </LeftBlock>
      <RightBlock>
        <RightBlockTitle>Mande uma mensagem</RightBlockTitle>
        <ContactForm>
          <FormField type="text" placeholder="Nome" />
          <FormField type="email" placeholder="E-mail" />
          <FormField type="text" placeholder="Assunto" />
          <FormFieldTextArea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Sua mensagem"
          ></FormFieldTextArea>
          <ContactFormButton>Enviar mensagem</ContactFormButton>
        </ContactForm>
      </RightBlock>
    </ContactContainer>
  );
}
