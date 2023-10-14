import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/styles.module.css'
import * as React from "react";
import { motion } from "framer-motion";
import profileImage from "../../public/Images/WebPFiles/psound.webp"
import { inView } from "framer-motion"

const PhotoArray = []

export default function index(){
  return(
    
  <div>
    <Head>
        <title>Orchard Beach Community Group</title>
        <meta property="og:title" content="Orchard Beach Community Group" key="title" /> 
    </Head>
    
     <div className={styles.mainName}>
    <h2 className={styles.bgText}>
      <b>Orchard Beach</b>
    </h2>
    <h2 className={styles.bgText}>
      <b>Community Group</b>
    </h2>
    
    </div>
  <div>
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    
    <motion.div animate={{
        opacity: [1, 0, 0, 0, 1],        
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        className={styles.Psound}
        alt="Whale Sighting"
        src="/Images/WebPFiles/psound.webp"
        layout="fill"
        objectFit="cover"
        quality={85}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 1, 0, 0, 0],       
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Sunrise"
        src="/Images/WebPFiles/sunrise.webp"
        layout="fill"
        objectFit="cover"
        quality={50}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 0, 1, 0, 0],        
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        className={styles.Psound}
        alt="Droplets"
        src="/Images/WebPFiles/boat.webp"
        layout="fill"
        objectFit="cover"
        quality={85}
      />
    </motion.div>
    {/* <motion.div animate={{
        opacity: [0, 0, 0, 0, 0],        
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Droplets"
        src="/Images/WebPFiles/whale.webp"
        layout="fill"
        objectFit="cover"
        quality={85}
      />
    </motion.div> */}
    <motion.div animate={{
        opacity: [0, 0, 0, 1, 0],        
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Orchard Beach"
        src="/Images/WebPFiles/hero-bg.webp"
        layout="fill"
        objectFit="cover"
        quality={85}
      />
    </motion.div>
    <motion.div animate={{
        opacity: [0, 0, 0, 0, 1],        
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0
      }} 
      className={styles.bgWrap}>
      <Image
        alt="Water Droplets"
        src="/Images/WebPFiles/glass_droplets.webp"
        /*filter="blur"*/
        layout="fill"
        objectFit="cover"
        quality={85}
      />
    </motion.div>
   
    
    </motion.div>

    </div>
    </div>
)}
