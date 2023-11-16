import { styled } from "styled-components";
import { Theme } from "../../theme/Theme";

const { colors, fontSize, layout } = Theme;

export const MessageStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: max-content;
  margin-bottom: 2rem;
  padding: ${layout.padding};

  & .carousel.carousel-slider {
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem ${colors.shadowsColor};
    width: 600px;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  & > div {
    background-color: ${colors.backgroundPrimary};
    height: max-content;
    min-width: 350px;
    max-width: 1200px;
    padding: 2rem;
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
