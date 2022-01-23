
import styles from '../styles/misc.module.css'
import VideoBg1 from '../components/VideoBg1'
import { motion } from 'framer-motion';


const div = {
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

const Misc = props => (
  <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <VideoBg1 /> 
    <motion.div className={styles.bgcontainer}
    variants={div}
    initial="hidden"
    animate="show"
    >
    <div className={styles.content}>
    <motion.h2 variants={item} className='text-center'>Historical Documents</motion.h2><br /><br />
    <div className={styles.indDates}>
        
        
        
        <button className={styles.button1}><a  href='/misc/1982_Water_line_replacement.pdf'>1982 Water line replacement</a></button>
        <button className={styles.button1}><a  href='/misc/Legal_property.pdf'>Legal property</a></button>
        <button className={styles.button1}><a  href='/misc/Map_Master_Water_Line_Connections.pdf'>Map Water Line</a></button>
        <button className={styles.button1}><a  href='/misc/Park_Madings_Orchard_Beach.pdf'>Park Madings Orchard Beach </a></button>
        </div>
        </div>
        
        
    </motion.div>
  </motion.div>
);

export default Misc;