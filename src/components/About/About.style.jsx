import { styled } from "styled-components";
import { Theme } from "../../theme/Theme";

const { colors, layout, fontSize } = Theme;

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: ${layout.maxWidth};
  background-color: ${colors.backgroundPrimary};
  height: max-content;
  margin: 0 auto;
  padding: 5% 5%;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem ${colors.shadowsColor};

  & section {
    display: grid;
    grid-template-columns: ${layout.gridTemplateColumns};
    align-items: start;
    justify-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      width: 100%;
      max-width: 600px;
      height: 100%;
      line-height: 1.3rem;
      & > img {
        position: sticky;
        top: 20%;
        /* transform: translateY(-30%); */
        width: 100%;
        height: auto;
        max-width: 600px;
      }
    }
  }
  & span {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
  }

  & > #motivationFrase {
    text-align: center !important;
  }
  & p {
    font-size: ${fontSize.small};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;
