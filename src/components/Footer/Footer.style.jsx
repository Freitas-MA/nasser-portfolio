import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, fonts } = Theme;

export const FooterContainer = styled.div`
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  color: ${colors.textSecondary};
  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
