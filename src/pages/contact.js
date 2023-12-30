import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../public/Images/WebPFiles/fullsmall.webp'



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
  const address = `Orchard Beach
Grapeview, WA 98546`;
const email = `orchardwater@yahoo.com`;

  return(
    <div className={styles.content}>
      <div className={styles.blackbox}>
        <div>
          <h2 className={styles.headliner}>Orchard Beach Established 1954</h2>
        </div>
        <div>
          <Image className={styles.mapImage}   
            src={profilePic}
            alt="Schematic map of Orchard Beach"
            width={240}
            height={300}
            priority
          />
        </div>
        <div className={styles.bottomliner}>
          <div>
            <h3>OBCG</h3>
          </div>
          <div>
            {address} <br />
            Email: 
            <button label="Write me an E-Mail"><a href = "${email}?&subject=OBCG%20Member%20Email">orchardwater@yahoo.com</a></button></div>
          </div>
        </div>
      </div>
    
)}
