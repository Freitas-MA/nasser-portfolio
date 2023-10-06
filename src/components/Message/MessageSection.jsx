import Carousel from "./Carousel/Carousel";
import { MessageStyled } from "./Message.Styled";
import React from "react";

export default function MessageSection(props) {
  const { title, text } = props;
  const paragraphs = text
    ? text
        .split("\n\n")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("")
    : "";

  return (
    <MessageStyled>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: paragraphs }} />
      </div>
      <div id="Carousel">
        <Carousel />
      </div>
    </MessageStyled>
  );
}