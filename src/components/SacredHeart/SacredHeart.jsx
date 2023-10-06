import React from "react";
import { StyledSacredHeart } from "./SacredHeart.style";
import sacredHeartImg from "../../assets/SectionsImg/SacredHeart.png";
import { sacredHeart } from "./SacredHeart.text";
import { motion } from "framer-motion";

export default function SacredHeart(props) {
  const { text } = props;
  const paragraphs = text
  ? text 
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")
  : "";


  return (
    <StyledSacredHeart>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <img src={sacredHeartImg} alt="sacredHeart" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        id="sacredHeartText"
        dangerouslySetInnerHTML={{ __html: paragraphs }}
      />
    </StyledSacredHeart>
  );
}
