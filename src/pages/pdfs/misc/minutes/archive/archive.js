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
            <h2 className='text-center'><b>OBCG</b><br /><b>Minutes Archive</b></h2>
            <p></p>
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/20140621'>2014 06/21</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2014'>2014 01/26</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2013'>2013</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2012'>2012</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2010'>2010</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2008'>2008</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2006'>2006</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/archive/20041016'>2004</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2002'>2002</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2000'>2000</a></button>
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1998'>1998</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1997'>1997</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1996'>1996</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1995'>1995</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1994'>1994</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1993'>1993</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1992'>1992</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1991'>1991</a></button>
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1990'>1990</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1989'>1989</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1988'>1988</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1987'>1987</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1986'>1986</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1985'>1985</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1984'>1984</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1983'>1983</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/19822'>1982 05/22</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1982'>1982 07/11</a></button>
        
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1981'>1981</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1980'>1980</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1979'>1979</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1978'>1978</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1977'>1977</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1976'>1976</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1975'>1975</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1974'>1974</a></button>    
        </div>
        </div>
        
        </motion.container>
        </motion.div>
        );
        
        export default Archive;