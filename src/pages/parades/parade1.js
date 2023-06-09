'use client'

import styles from '../../styles/About.module.css'
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom'
import ReactPlayer from 'react-player';
import React from 'react';


const Parade1 = () => (
<motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
   
    <Zoom top>
    <motion.div className={styles.content}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}>
      
		 <ReactPlayer
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      onContextMenu={e => e.preventDefault()}
      url="https://res.cloudinary.com/dfnaxhqqq/video/upload/v1657634720/obcg/OBCG_2018__4th_July_Parade_p8kgjw.mp4#t=0.001" 
      className='react-player'
      playing={true} 
      loop={true} 
      muted={true} 
      controls
      width='100%' 
      height='100%' />
      
    </motion.div>
    </Zoom>
  </motion.div>

);

export default Parade1;
