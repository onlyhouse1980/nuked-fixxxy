import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../public/Images/WebPFiles/fullsmall.webp'

export async function getStaticProps() {
  return {
    props: {},
  };
}

const div = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}
const Contact = () => (
  <div>
    <div className={styles.content}>
    <div className={styles.blackbox}>
    <div><h2 className={styles.headliner}>Orchard Beach Established 1954</h2></div>
    <div ><Image className={styles.mapImage}   
      src={profilePic}
      alt="upload of Orchard Beach" 
      fill
      priority
      />
      </div>
      <div className={styles.bottomliner}>
      <div ><h3>OBCG</h3></div>
      <div >
      Orchard Beach<br /> 
      Grapeview, WA 98546 <br />
      Email: 
      
      <button label="Write me an E-Mail"><a href = "mailto:orchardwater@yahoo.com?&subject=OBCG%20Member%20Email">orchardwater@yahoo.com</a></button></div>
      </div>
    </div>
    </div>
  </div>
);

export default Contact;
