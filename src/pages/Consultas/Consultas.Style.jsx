import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, layout } = Theme;
export const ConsultasStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 4rem 10rem;

  & > div {
    margin: 10px;
    width: 250px;
    height: auto;
    padding: 10px;
    overflow: hidden;

    & > h3 {
      text-align: center;
      margin-bottom: 10px;
    }

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
      box-shadow: 2px 5px 10px 0px ${colors.shadowsColor};

    }

    & > button {
      display: block;
      margin: 10px auto;
      padding: 10px;
      border-radius: 5px;
      border: none;
      box-shadow: 2px 5px 10px 0px ${colors.shadowsColor};
      background-color: ${colors.backgroundPrimary};
      color: ${colors.textPrimary};
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
