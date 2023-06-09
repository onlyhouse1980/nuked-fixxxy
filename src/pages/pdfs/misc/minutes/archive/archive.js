import styles from '../../../../styles/Home.module.css';
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
        
        
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/20140621.pdf'>2014 06/21</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2014.pdf'>2014 01/26</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2013.pdf'>2013</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2012.pdf'>2012</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2010.pdf'>2010</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2008.pdf'>2008</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2006.pdf'>2006</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/archive/20041016.pdf'>2004</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2002.pdf'>2002</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/2000.pdf'>2000</a></button>
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1998.pdf'>1998</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1997.pdf'>1997</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1996.pdf'>1996</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1995.pdf'>1995</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1994.pdf'>1994</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1993.pdf'>1993</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1992.pdf'>1992</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1991.pdf'>1991</a></button>
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1990.pdf'>1990</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1989.pdf'>1989</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1988.pdf'>1988</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1987.pdf'>1987</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1986.pdf'>1986</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1985.pdf'>1985</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1984.pdf'>1984</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1983.pdf'>1983</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/19822.pdf'>1982 05/22</a></button>
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1982.pdf'>1982 07/11</a></button>
        
        
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1981.pdf'>1981</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1980.pdf'>1980</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1979.pdf'>1979</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1978.pdf'>1978</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1977.pdf'>1977</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1976.pdf'>1976</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1975.pdf'>1975</a></button>    
        <button className={styles.button}><a  href='../pages/pdfs/misc/minutes/1974.pdf'>1974</a></button>    
        </div>
        </div>
        
        </motion.container>
        </motion.div>
        );
        
        export default Archive;