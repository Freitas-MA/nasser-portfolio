import React from "react";
import { styled } from "styled-components";
import ImgBackground from "../../assets/background.png";


export default function Background() {
  return <StyledBackground>Background</StyledBackground>;
}

const StyledBackground = styled.div`
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
  opacity: 0.5;
  filter: blur(2px);
  z-index: -1;
`;
