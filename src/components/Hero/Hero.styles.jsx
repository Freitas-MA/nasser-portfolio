import { styled } from "styled-components";
import { Theme } from "../../theme/Theme";

const { fontSize, layout, fontFamily } = Theme;
export const StyledHero = styled.div`
  font-size: ${fontSize.xxLarge};
  font-family: ${fontFamily.tertiary};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 0 0 3rem;
  height: 100vh;
  max-width: ${layout.maxWidth};
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    // Insira suas regras CSS aqui para telas com largura máxima de 768px
    font-size: ${fontSize.xLarge};
    padding: 0;
  }
`;
