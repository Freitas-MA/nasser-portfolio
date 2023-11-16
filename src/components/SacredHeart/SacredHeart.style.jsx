import { styled } from "styled-components";
import { Theme } from "../../theme/Theme";

const { colors, fontSize, layout } = Theme;

export const StyledSacredHeart = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem ${layout.padding};
  max-width: ${layout.maxWidth};
  margin: 2rem auto;
  background-color: ${colors.backgroundPrimary};
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${colors.shadowsColor};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > img {
      width: 100%;
      height: auto;
      object-fit: fit;
    }
  }
  & > #sacredHeartText {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    padding-top: 5rem;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: start;

    & > p {
      height: 100%;
      font-size: ${fontSize.small};
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;
