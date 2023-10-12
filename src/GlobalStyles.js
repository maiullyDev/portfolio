import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --preto: #000000;
        --branco: #ffffff;
        --fundo: #0f103f;
        --fundo-footer: #1c1c65;
        --purple-1: #2f2f8a;
        --lilac-1: #c961de;
        --blue-1: #2954a3;
        --blue-2: #b5f9fd;
    }

    body {
        background-color: var(--fundo);
    }

`;
