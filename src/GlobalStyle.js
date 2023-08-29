import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme/theme";

const { fontFamily, colors } = Theme;
const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-family: ${fontFamily.primary};
        font-weight: 400;
        color: ${colors.textPrimary};
        height: 100vh;
        overflow-x: hidden;
  }
`;

export { GlobalStyle };
