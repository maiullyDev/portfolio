import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --text-muted: #D0D0D0;
        --black: #000000;
        --white: #ffffff;
        --gray: #70708C;
        --backgroud: #0f103f;
        --backgroud-footer: #1c1c65;
        --purple-1: #2f2f8a;
        --lilac-1: #c961de;
        --blue-1: #2954a3;
        --blue-2: #b5f9fd;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--backgroud);
    }

    button {
        cursor: pointer;

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
    }

`;
