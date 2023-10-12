import myPicture from "../../assets/Perfil.png";
import {
  AboutMeContainer,
  BlurEffect,
  AboutMeContent,
  Picture,
  TextTitle,
  BodyOfText,
  TextParagraph,
  ContrastText,
} from "./styles";

export function Aboutme() {
  return (
    <AboutMeContainer>
      <BlurEffect />
      <AboutMeContent>
        <Picture src={myPicture} alt="" />
        <TextTitle>Ao infinito e além!</TextTitle>
        <BodyOfText>
          <TextParagraph>
            Eu sou uma mulher que se identifica como parda, que é nordestina,
            que busca contribuir para que o mundo seja um lugar melhor e que tem
            o coração aberto para melhorar a cada dia.{" "}
          </TextParagraph>
          <TextParagraph>
            Pode não parecer, mas já passei por situações muito difíceis na
            vida, as quais me fizeram buscar na resiliência, na fé e no amor
            forças para levantar a cabeça e seguir em frente. Por isso escolhi o
            tema universo para este site e o lema ”Ao infinito e além”, é uma
            forma de dizer para mim e para as pessoas que os obstáculos não irão
            me deter.
          </TextParagraph>
          <TextParagraph>
            Gosto muito de aprender e estou sempre fazendo novos cursos!
            Atualmente tenho investido na{" "}
            <ContrastText>formação Full-stack</ContrastText> por meio dos cursos
            da Alura e estou{" "}
            <ContrastText>estudando Sistemas para Internet</ContrastText>. Além
            disso, fiz uma formação em{" "}
            <ContrastText>UX, UI e Product Design</ContrastText>, tenho
            investido em <ContrastText>projetos pessoais</ContrastText> e em
            estudar <ContrastText>inglês</ContrastText>. Costumo ser uma pessoa
            colaborativa, que tem prazer em ajudar e ser útil. Sou muito
            detalhista e procuro entregar o melhor de mim (como pessoa e como
            profissional).
          </TextParagraph>
        </BodyOfText>
      </AboutMeContent>
    </AboutMeContainer>
  );
}
