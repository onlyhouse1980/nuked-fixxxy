import Link from 'next/link';
import styles from '../styles/pastbylaws.module.css';
import { motion } from 'framer-motion'

export async function getStaticProps() {
  return {
    props: {},
  };
}
  
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
        
        const Misc = () => (
          <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
           
            <motion.container className={styles.bgcontainer}
            variants={container}
            initial="hidden"
            animate="show" >
            <h2 className='text-center'><b>OBCG</b><br /><b>Previous Bylaws</b></h2>
            <p></p>
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <button className={styles.button}><Link  href='/archbylaws/2010'>2010</Link></button>
        
        <button className={styles.button}><Link  href='/archbylaws/1982'>1982</Link></button>  
        <button className={styles.button}><Link  href='/archbylaws/1977'>1977</Link></button>    
        <button className={styles.button}><Link  href='/archbylaws/1975'>1975</Link></button>
        </div>
        </div>
        
        </motion.container>
        </motion.div>
        );
        
        export default Misc;