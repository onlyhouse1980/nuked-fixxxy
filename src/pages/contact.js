import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MailToButton from '../components/MailToButton'
import { ButtonMailto } from '../components/ButtonMailto'

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

const Contact = () => (
  <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <VideoBg1 />
    <motion.container className={styles.content}
    variants={container}
    initial="hidden"
    animate="show"
    >
    <div className={styles.blackbox}>
    <motion.div variants={item}><h2 className={styles.headliner}>Orchard Beach Established 1954</h2></motion.div>
    <motion.div variants={item}><Image className={styles.mapImage}   src="/Images/WebPFiles/fullsmall.webp"
      alt="upload of Orchard Beach" 
      minwidth="90vw" 
      minheight="100%"
      width="1920"
      height="714" 
      />
      </motion.div>
      <div className={styles.bottomliner}>
      <motion.div variants={item}><h3>OBCG</h3></motion.div>
      <motion.div variants={item}>
      Orchard Beach<br /> 
      Grapeview, WA 98546 <br />
      Email: 
      
      <button label="Write me an E-Mail"><a href = "mailto:orchardwater@yahoo.com?&subject=OBCG%20Member%20Email">orchardwater@yahoo.com</a></button></motion.div>
      </div>
    </div>
    </motion.container>
  </motion.div>
);

export default Contact;