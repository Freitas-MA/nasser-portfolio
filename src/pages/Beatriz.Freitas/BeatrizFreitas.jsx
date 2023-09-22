import React from "react";
import { BeatrizFreitasStyled } from "./BeatrizFreitas.style";
import { motion } from "framer-motion";
import {
  beatrizProfile,
  beatrizAbout,
  messageProfile,
} from "../../Objects.API/Beatriz.Freitas";

export default function BeatrizFreitas() {
  const { photo, title } = beatrizProfile;
  const { aboutTitle, aboutText } = beatrizAbout;
  const { message, author } = messageProfile;

  const paragraphs = aboutText
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <BeatrizFreitasStyled>
      <div id="background" />
      <motion.section
        initial={{ transform: "translateY(60vh)", opacity: 0 }}
        animate={{ transform: "translateY(0vh)", opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Beatriz Freitas</h1>
        <div>
          <div id="beatrizPicture">
            <img src={photo} alt={title} />
          </div>
          <div id="beatrizProfile">
            <h2>{aboutTitle}</h2>
            {paragraphs}
          </div>
        </div>
        <div id="messageProfile">
          <div>
            <p>
              <strong>{message}</strong>
            </p>
            <p>{author}</p>
          </div>
        </div>
      </motion.section>
    </BeatrizFreitasStyled>
  );
}
