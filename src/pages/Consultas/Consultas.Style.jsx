import { styled } from "styled-components";
import { Theme } from "../../theme/theme";
import ImgBackground from "../../assets/background.png";

const { colors } = Theme;
export const ConsultasStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  & > section {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    padding: 4rem 10rem;
  
    & > div {
      margin: 10px;
      width: 250px;
      min-width: 250px;
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
      & #background {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 110vh;
        background-image: url(${ImgBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateY(-10vh);
        opacity: 0.8;
        z-index: -1;
    }
    }
  }
  & #background {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    background-image: url(${ImgBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(-10vh);
    opacity: 0.3;
    filter: blur(5px);
    z-index: -1;
  }
`;
