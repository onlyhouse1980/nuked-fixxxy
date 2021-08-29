import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    <motion.p variants={item}><Image className={styles.resizers}   src="/Images/WebPFiles/fullsmall.webp"
      alt="upload of Orchard Beach" 
      minwidth="90vw" 
      minheight="auto"
      width="800"
      height="auto" 
      />
      </motion.p>
      <div className={styles.textCenter}>
      <motion.p variants={item}><h3>OBCG</h3></motion.p>
      <motion.p variants={item}>
      Orchard Beach<br /> 
      Grapeview, WA 98546 <br />
      Email: 
      <button className="btn btn-primary">orchardwater@yahoo.com</button>
        </motion.p>
      </div>
    </div>
    </motion.container>
  </motion.div>
);

export default Contact;