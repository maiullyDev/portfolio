import { FiArrowUp } from "react-icons/fi";
import { Button } from "./styles";
import React, { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [buttonIsVisible, setButtonIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      /*
      Obtendo a posição vertical de rolagem da página:
      -> window.scrollY é uma propriedade que retorna o número de pixels que o documento foi rolado verticalmente em relação à parte superior. No entanto, nem todos os navegadores suportam essa propriedade. Então, para garantir suporte em diferentes navegadores, é comum usar o operador lógico OR (||) para fornecer uma alternativa.
      -> document.documentElement.scrollTop é uma propriedade que fornece a quantidade de pixels que o documento foi rolado verticalmente, mas desta vez acessando diretamente o elemento <html> (raiz do documento). Isso é uma alternativa ao window.scrollY e é mais amplamente suportado em vários navegadores.
      */
      const windowHeight = window.innerHeight;
      /*
      Obtendo a altura da janela do navegador em pixels:
      -> window refere-se ao objeto global window do navegador.
      -> innerHeight é uma propriedade desse objeto que fornece a altura do conteúdo visível na janela do navegador.
      */
      const documentHeight = document.documentElement.scrollHeight;
      /*
      Obter a altura total do documento (incluindo o conteúdo que está fora da área visível na janela do navegador):
      -> document.documentElement refere-se ao elemento raiz do documento HTML, que é o elemento <html>.
      -> scrollHeight é uma propriedade desse elemento que retorna a altura total do elemento, incluindo a altura que não está visível na tela devido à rolagem.
      */

      const positionTop = 200; // Posição a partir da qual o elemento deve ser visível.
      const positionBottom = 50; // Posição a partir do final da página para determinar quando o elemento deve desaparecer.

      // Calculando a posição a partir do final da página:
      const positionFromBottom = documentHeight - (scrollY + windowHeight);

      setButtonIsVisible(
        scrollY > positionTop && positionFromBottom > positionBottom
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {buttonIsVisible && (
        <Button href="#header">
          <FiArrowUp color="#B5F9FD" size={20} />
        </Button>
      )}
    </div>
  );
}
