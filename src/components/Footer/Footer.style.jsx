import { styled } from "styled-components";
import { Theme } from "../../theme/Theme";

const { colors, fonts } = Theme;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  color: ${colors.textSecondary};
  text-align: center;
  font-size: 1rem;
  z-index: 9999;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 350px;
  }
`;
