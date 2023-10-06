import React from "react";
import { StyledHero } from "./Hero.styles";
import { motion } from "framer-motion";

export default function Hero(props) {
  const { title } = props;
  return (
    <StyledHero id="Home">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <h1>
          {title}
        </h1>
      </motion.div>
    </StyledHero>
  );
}
