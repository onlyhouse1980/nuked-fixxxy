import VideoBg1 from '../components/VideoBg1'
import styles from '../styles/archives.module.css'
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom'



const Archive = props => (
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
        <VideoBg1 />
        <Zoom top>
        <motion.div className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
            
        <div className={styles.dates}>
        <div className={styles.clms}>
        <h1 className={styles.h1}>Archived Minutes</h1>
        <div className={styles.indDates}>
        <button><a target='_blank' href='/2014.pdf'>2014</a></button>
        <button><a target='_blank' href='/2014.pdf'>2013</a></button>
        <button><a target='_blank' href='/2014.pdf'>2012</a></button>
        <button><a target='_blank' href='/2014.pdf'>2011</a></button>
        <button><a target='_blank' href='/2014.pdf'>2010</a></button>
        <button><a target='_blank' href='/2014.pdf'>2009</a></button>
        <button><a target='_blank' href='/2014.pdf'>2008</a></button>
        <button><a target='_blank' href='/2014.pdf'>2007</a></button>
        </div>
        <div className={styles.indDates}>
        <button><a target='_blank' href='/2014.pdf'>2006</a></button>
        <button><a target='_blank' href='/2014.pdf'>2005</a></button>
        <button><a target='_blank' href='/2014.pdf'>2004</a></button>
        <button><a target='_blank' href='/2014.pdf'>2003</a></button>
        <button><a target='_blank' href='/2014.pdf'>2002</a></button>
        <button><a target='_blank' href='/2014.pdf'>2001</a></button>
        <button><a target='_blank' href='/2014.pdf'>2000</a></button>
        <button><a target='_blank' href='/2014.pdf'>1999</a></button>
        </div>
        <div className={styles.indDates}>
        <button><a target='_blank' href='/2014.pdf'>1998</a></button>
        <button><a target='_blank' href='/2014.pdf'>1997</a></button>
        <button><a target='_blank' href='/2014.pdf'>1996</a></button>
        <button><a target='_blank' href='/2014.pdf'>1995</a></button>
        <button><a target='_blank' href='/2014.pdf'>1994</a></button>
        <button><a target='_blank' href='/2014.pdf'>1993</a></button>
        <button><a target='_blank' href='/2014.pdf'>1992</a></button>
        <button><a target='_blank' href='/2014.pdf'>1991</a></button>
        </div>
        <div className={styles.indDates}>
        <button><a target='_blank' href='/2014.pdf'>1990</a></button>
        <button><a target='_blank' href='/2014.pdf'>1989</a></button>
        <button><a target='_blank' href='/2014.pdf'>1987</a></button>
        <button><a target='_blank' href='/2014.pdf'>1986</a></button>
        <button><a target='_blank' href='/2014.pdf'>1985</a></button>
        <button><a target='_blank' href='/2014.pdf'>1984</a></button>
        <button><a target='_blank' href='/2014.pdf'>1983</a></button>
        <button><a target='_blank' href='/2014.pdf'>1982</a></button>
        </div>
        </div>
        <div className={styles.indDates}>
        <button><a target='_blank' href='/2014.pdf'>1981</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1980</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1979</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1978</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1977</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1976</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1975</a></button>    
        <button><a target='_blank' href='/2014.pdf'>1974</a></button>    
        </div>
        </div>
        </motion.div>
        </Zoom>
      </motion.div>
    
    );
    
    export default Archive;