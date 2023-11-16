import { styled } from "styled-components";
import { Theme } from "../../../theme/Theme";

const { colors, layout, fontSize } = Theme;

export const StyledConsultaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 95vh;
  padding-top: 0vh;

  & > section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: auto;
    margin-top: 4rem;

    & > img {
      width: 100%;
      max-width: 350px;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 0 10px ${colors.shadowsColor};
      margin: 2rem;
    }
    & > div {
      width: 100%;
      max-width: 750px;
      padding: 2rem;
      background-color: #ffffff8b;
      border-radius: 5px;

      & > h1 {
        font-size: ${fontSize.medium};
      }
      & > p {
        margin-top: 2rem;
      }
    }
  }
`;
