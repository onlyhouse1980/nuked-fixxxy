import styles from '../../../../../styles/archive.module.css'
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
        
        const Archive = () => (
          <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
            
            <motion.container className={styles.bgcontainer}
            variants={container}
            initial="hidden"
            animate="show" >
            <h2 className='text-center.pdf'><b>OBCG</b><br /><b>Minutes Archive</b></h2>
            <p></p>
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <button className={styles.button}><a  href='./20140621'>2014 06/21</a></button>
        <button className={styles.button}><a  href='./2014'>2014 01/26</a></button>
        <button className={styles.button}><a  href='./2013'>2013</a></button>
        <button className={styles.button}><a  href='./2012'>2012</a></button>
        <button className={styles.button}><a  href='./2010'>2010</a></button>
        <button className={styles.button}><a  href='./2010bl'>2010 Bylaws</a></button>
        <button className={styles.button}><a  href='./2008'>2008</a></button>
        <button className={styles.button}><a  href='./2006'>2006</a></button>
        <button className={styles.button}><a  href='./2004'>2004</a></button>
        <button className={styles.button}><a  href='./2002'>2002</a></button>
        <button className={styles.button}><a  href='./2000'>2000</a></button>
        
        <button className={styles.button}><a  href='./1998'>1998</a></button>
        <button className={styles.button}><a  href='./1997'>1997</a></button>
        <button className={styles.button}><a  href='./1996'>1996</a></button>
        <button className={styles.button}><a  href='./1995'>1995</a></button>
        <button className={styles.button}><a  href='./1994'>1994</a></button>
        <button className={styles.button}><a  href='./1993'>1993</a></button>
        <button className={styles.button}><a  href='./1992'>1992</a></button>
        <button className={styles.button}><a  href='./1991'>1991</a></button>
        
        <button className={styles.button}><a  href='./1990'>1990</a></button>
        <button className={styles.button}><a  href='./1989'>1989</a></button>
        <button className={styles.button}><a  href='./1988'>1988</a></button>
        <button className={styles.button}><a  href='./1987'>1987</a></button>
        <button className={styles.button}><a  href='./1986'>1986</a></button>
        <button className={styles.button}><a  href='./1985'>1985</a></button>
        <button className={styles.button}><a  href='./1984'>1984</a></button>
        <button className={styles.button}><a  href='./1983'>1983</a></button>
        <button className={styles.button}><a  href='./19822'>1982 Annual</a></button>
        <button className={styles.button}><a  href='./1982'>1982 Special</a></button>
        
        
        <button className={styles.button}><a  href='./1981'>1981</a></button>    
        <button className={styles.button}><a  href='./1980'>1980</a></button>    
   
        <button className={styles.button}><a  href='./1979'>1979</a></button>    
        <button className={styles.button}><a  href='./1978'>1978</a></button>    
        <button className={styles.button}><a  href='./1977'>1977</a></button>
        <button className={styles.button}><a  href='./1977bl'>1977 Bylaws</a></button>    
        <button className={styles.button}><a  href='./1976'>1976</a></button>  
        <button className={styles.button}><a  href='./1975'>1975</a></button>  
        <button className={styles.button}><a  href='./1975bl'>1975 Bylaws</a></button>    
        <button className={styles.button}><a  href='./1974'>1974</a></button>  
        </div>
        </div>
        
        </motion.container>
        </motion.div>
        );
        
        export default Archive;
