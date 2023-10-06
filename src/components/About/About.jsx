import React from "react";
import { StyledAbout } from "./About.style";
import LogoNasser from "../../assets/Logo/2-removebg-preview.png";
import Frase from "./MotivationalFrase/Frase";
import { motion } from "framer-motion";

export default function About(props = { text: "", author: "" }) {
  const { text, author } = props;
  const paragraphs = text
  ? text
    .split("\n\n")
    .map(
      (paragraph) => `<p>${paragraph}</p>`
    )
    .join("")
  : "";
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
