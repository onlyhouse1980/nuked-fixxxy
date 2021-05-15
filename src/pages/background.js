import Image from 'next/image'

import { bgWrap, bgText } from '../styles/styles.module.css'
import * as React from "react";
import { motion } from "framer-motion";

const Background = () => (
  <div>
    
    <motion.div animate={{
        opacity: [1, 1, 1, 1, 1],        
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        
        loop: Infinity,
        repeatDelay: 0
      }} 
      className={bgWrap}>
      <Image
        alt="Orchard Beach"
        src="/Images/WebPFiles/hero-bg.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [.25, 0, .5, 1, .25],        
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        loop: Infinity,
        repeatDelay: 0
      }} 
      className={bgWrap}>
      <Image
        alt="Sunrise"
        src="/Images/WebPFiles/sunrise.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [.5, 0, .5, 0, 0.5],        
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        loop: Infinity,
        repeatDelay: 0
      }} 
      className={bgWrap}>
      <Image
        alt="Droplets"
        src="/Images/glass_droplets.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <h2 className={bgText}>
      Orchard Beach
      <br />
      Community Group
    </h2>
  </div>
)

export default Background