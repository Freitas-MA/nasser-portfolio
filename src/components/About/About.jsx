import React from "react";
import { StyledAbout } from "./About.style";
import LogoNasser from "../../assets/Logo/2-removebg-preview.png";
import Frase from "./MotivationalFrase/Frase";
import { aboutTexts } from "./texts";
import { motion } from "framer-motion";

export default function About() {
  const { text, author } = aboutTexts;
  const paragraphs = text
    .split("\n\n")
    .map(
      (paragraph) => `<p>${paragraph}</p>`
    )
    .join("");
  return (
    <StyledAbout>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}          
        >
          <img 
          src={LogoNasser} />
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
        dangerouslySetInnerHTML={{ __html: paragraphs }} />
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <motion.span>{author}</motion.span>
        <Frase />
      </motion.div>
    </StyledAbout>
  );
}
