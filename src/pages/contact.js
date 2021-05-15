import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'

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
    <motion.container className={styles.bgcontainer}
    variants={container}
    initial="hidden"
    animate="show"
    >
    <div className={styles.content}>
    <motion.p variants={item}><h2 className='textCenter'>Orchard Beach Established 1954</h2></motion.p>
    <motion.p variants={item}><img src="/Images/WebPFiles/fullsmall.webp" loading="lazy" height="" sizes="90vw" srcSet="/Images/WebPFiles/fullsmall-p-500.webp 500w, /Images/WebPFiles/fullsmall-p-800.webp 800w, /Images/WebPFiles/fullsmall-p-1080.webp 1080w, /Images/WebPFiles/fullsmall-p-1600.webp 1600w, /Images/WebPFiles/fullsmall.webp 1920w" alt="upload of Orchard Beach" /></motion.p>
      <div className="textCenter">
      <motion.p variants={item}><h3>OBCG</h3></motion.p>
      <motion.p variants={item}><p>Orchard Beach<br /> Grapeview, WA 98546<br /><br />
          <strong>Email: </strong><a href="mailto:orchardwater@yahoo.com">orchardwater@yahoo.com</a>
        </p></motion.p>
      </div>
    </div>
    </motion.container>
  </motion.div>
);

export default Contact;