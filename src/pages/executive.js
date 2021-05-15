import VideoBg from '../components/VideoBg';
import styles from '../styles/executive.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Executive = () => (
  <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <VideoBg /> 
    <motion.container className={styles.bgcontainer}
    variants={container}
    initial="hidden"
    animate="show" className={styles.textbox}>
    <h2 className='text-center'><b>OBCG</b><br /><b>Executive Board</b></h2>
    <p></p>
    <div className={styles.divBlock}>
      <motion.div variants={item} className= {styles.content}><motion.img src="/Images/WebPFiles/team-1.webp" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.contentNameplate}><p>Jim Farrell<br />President<br /><a className={styles.clink}><Link href="/contactus1" passHref>Contact</Link></a></p></div>
      </motion.div>
      <motion.div variants={item} className= {styles.content}><motion.img src="/Images/WebPFiles/team-2.webp" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.contentNameplate}><p>Erika Aust<br />Vice President<br /><a className={styles.clink}><Link href="/contactus" passHref>Contact</Link></a></p></div>
      </motion.div>
      <motion.div variants={item} className= {styles.content}><motion.img src="/Images/WebPFiles/team-3.webp" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.contentNameplate}><p>James Loder<br />Secretary/Treasurer<br /><a className={styles.clink}><Link href="/contactus3" passHref>Contact</Link></a></p></div>
      </motion.div>
      </div>
      </motion.container>

  </motion.div>
);

export default Executive;