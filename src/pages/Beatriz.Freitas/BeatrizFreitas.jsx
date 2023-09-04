import React from "react";
import { BeatrizFreitasStyled } from "./BeatrizFreitas.style";
import { motion } from "framer-motion";

export default function BeatrizFreitas() {
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
          <div></div>
          <div></div>
        </div>
      </motion.section>
    </BeatrizFreitasStyled>
  );
}
