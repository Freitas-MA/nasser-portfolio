import React from "react";
import { StyledHome } from "./StyledHome";
import { Background, Hero } from "../../components";
import About from "../../components/About/About";
import MessageSection from "../../components/Message/MessageSection";
import SacredHeart from "../../components/SacredHeart/SacredHeart";

export default function Home() {
  return (
    <StyledHome>
          <Background/>
          <Hero />
          <About />
          <SacredHeart />
          <MessageSection />
    </StyledHome>
  );
}
