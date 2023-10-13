import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom'

  export default function About() {
    return(
      <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
        <Zoom top>
          <motion.div className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
            <h2 className='text-center'>Orchard Beach <br />Community Group </h2>
            <p>The Orchard Beach water system is an existing Group A system located in the Southwest quarter of the Southeast quarter of Section 22, Township 21 North, Range 2 West, W.M situated in Mason County, Washington. The system is a waterfront system located by Pickering Passage in Puget Sound that serves 39 connections. The system&apos;s elevation ranges from 65 feet to 30 feet. The water system is composed of two 6 inch wells with a capacity of 10 gpm and 60 gpm located at 57 feet of elevation. Well water is pumped from SO2 (primary source) and SO1 (backup source) to 8 bladder tanks and out to distribution. SO1 (backup source) comes on only during the peak seasons. The distribution system is comprised of approximately 4,300 feet of 4-inch PVC pipe.</p>
          </motion.div>
        </Zoom>
      </motion.div>)
  }
