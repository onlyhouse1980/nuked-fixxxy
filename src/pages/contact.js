import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'




const div = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}
export default function Contact() {
  
const email = `orchardwater@yahoo.com`;

  return(

  <div>
    
    <container className={styles.content}>
    <h2 className={styles.h2Title}>Orchard Beach Established 1954</h2>
    
    <div className={styles.info}>
      <div><h3>OBCG</h3></div>
      <div >
      Orchard Beach
Grapeview, WA 98546 <br />
      Email: 
      
      <button label="Write me an E-Mail"><a href = "${email}?&subject=OBCG%20Member%20Email">orchardwater@yahoo.com</a></button></div>
      </div>

    <Image className={styles.mapImage}   
      src="/Images/WebPFiles/fullsmall.webp"
      alt="Schematic map of Orchard Beach" 
      width={900}
      height={1000}
      priority
      />
      
      
    </container>
    
  </div>
  )}