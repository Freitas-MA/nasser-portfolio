import React from "react";
import { BeatrizFreitasStyled } from "./BeatrizFreitas.style";
import { motion } from "framer-motion";
import { Background } from "../../components/index";
import {
  beatrizProfile,
  beatrizAbout,
  messageProfile,
} from "../../Objects.API/Beatriz.Freitas";

export default function BeatrizFreitas() {
  const { photo, title } = beatrizProfile;
  const { aboutTitle, aboutText } = beatrizAbout;
  const { message, author } = messageProfile;

  // Utility function to split text into paragraphs
  function splitIntoParagraphs(text) {
    return text.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  // Usage in the component
  const paragraphs = splitIntoParagraphs(aboutText);

  return (
    <BeatrizFreitasStyled>
      <Background />
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

/**
 * Renders a React component that displays information about Beatriz Freitas.
 *
 * @returns {JSX.Element} The rendered React component.
 */
