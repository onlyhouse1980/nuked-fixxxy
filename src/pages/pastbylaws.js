import VideoBg from '../components/VideoBg';
import styles from '../styles/pastbylaws.module.css';
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
        
        const PreviousBylaws = () => (
          <motion.div className={styles.bigBox} exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
            <VideoBg /> 
            <motion.container className={styles.bgcontainer}
            variants={container}
            initial="hidden"
            animate="show" >
            
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <h2>OBCG</h2><br /><h2>Previous Bylaws</h2><br />
        <div className={styles.buttines}>
        
        <button className={styles.button}><a  href='/archive/2010bl.pdf'>2010</a></button>
        
        <button className={styles.button}><a  href='/archive/1982bl.pdf'>1982</a></button>  
        <button className={styles.button}><a  href='/archive/1977bl.pdf'>1977</a></button>    
        <button className={styles.button}><a  href='/archive/1975bl.pdf'>1975</a></button>    
        </div>
        </div>
        </div>
        
        </motion.container>
        </motion.div>
        );
        
        export default PreviousBylaws;