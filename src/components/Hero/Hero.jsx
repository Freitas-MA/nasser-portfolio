import React from 'react'
import { StyledHero } from './Hero.styles'
import { motion } from 'framer-motion'


export default function Hero() {
    
  return (
    <StyledHero id='Home'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        >
          <h1>
          Nas´Ser
          </h1>
        </motion.div>
    </StyledHero>
  )
}
