import React from "react";
import { StyledHome } from "./StyledHome";
import { Background } from "../../components";
import { homeText } from "../../Objects.API/Home.Maps";
export default function Home() {
  const homeData = homeText;

  return (
    <StyledHome>
      <Background />
      {homeData.map((data, index) => {
        const Component = data.component;
        const author = data.author || "";
        const title = data.title || "";
        const text = data.text || "";
        const key = data.key || index;
        const Photos = data.photos || [];
        return <Component key={key} author={author} title={title} text={text} photos={Photos}/>;
      })}
    </StyledHome>
  );
}
