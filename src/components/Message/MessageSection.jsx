import Carousel from "./Carousel/Carousel";
import { MessageStyled } from "./Message.Styled";
import { messageTexts } from "./texts";

import React from "react";

export default function MessageSection() {
  const { title, text } = messageTexts;
  const paragraphs = text
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

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
