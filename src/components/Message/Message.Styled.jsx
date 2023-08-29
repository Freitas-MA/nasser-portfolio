import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, fontSize, layout } = Theme;

export const MessageStyled = styled.section`
  display: grid;
  grid-template-columns: ${layout.gridTemplateColumns};
  grid-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  border: 1px solid ${colors.primary};
  height: max-content;
  margin-bottom: 2rem;
  padding: ${layout.padding};

  & > div {
    background-color: ${colors.backgroundPrimary};
    min-height: 80%;
    height: max-content;
    min-width: 350px;
    max-width: 850px;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem ${colors.shadowsColor};
    margin: 0 auto;
  }
  & h1 {
    font-size: ${fontSize.xLarge};
    font-family: ${Theme.fontFamily.secondary};
    font-weight: 400;
  }
  & p {
    font-size: ${fontSize.small};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  
`;
