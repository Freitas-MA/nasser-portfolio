import { styled } from "styled-components";
import ImgBackground from "../../assets/background.png";

export const StyledHome = styled.div`
  position: relative;
  display: block;
  height: 110vh;
  width: 100%;
  margin: 0 auto;

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
    opacity: 0.4;
    z-index: -1;
  }
`;
