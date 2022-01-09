
            
        
        import VideoBg from '../components/VideoBg';
        import styles from '../styles/archive.module.css';
        import Link from 'next/link';
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
        
        const Archive = () => (
          <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
            <VideoBg /> 
            <motion.container className={styles.bgcontainer}
            variants={container}
            initial="hidden"
            animate="show" className={styles.textbox}>
            <h2 className='text-center'><b>OBCG</b><br /><b>Minutes Archive</b></h2>
            <p></p>
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <button><a target='_blank' href='/2014.pdf'>2014</a></button>
        <button><a target='_blank' href='/2014.pdf'>2013</a></button>
        <button><a target='_blank' href='/2014.pdf'>2012</a></button>
        <button><a target='_blank' href='/2014.pdf'>2011</a></button>
        <button><a target='_blank' href='/2014.pdf'>2010</a></button>
        <button><a target='_blank' href='/2014.pdf'>2009</a></button>
        <button><a target='_blank' href='/2014.pdf'>2008</a></button>
        <button><a target='_blank' href='/2014.pdf'>2007</a></button>
        
        <button><a target='_blank' href='/2014.pdf'>2006</a></button>
        <button><a target='_blank' href='/2014.pdf'>2005</a></button>
        <button><a target='_blank' href='/2014.pdf'>2004</a></button>
        <button><a target='_blank' href='/2014.pdf'>2003</a></button>
        <button><a target='_blank' href='/2014.pdf'>2002</a></button>
        <button><a target='_blank' href='/2014.pdf'>2001</a></button>
        <button><a target='_blank' href='/2014.pdf'>2000</a></button>
        <button><a target='_blank' href='/2014.pdf'>1999</a></button>
        
        <button><a target='_blank' href='/2014.pdf'>1998</a></button>
        <button><a target='_blank' href='/2014.pdf'>1997</a></button>
        <button><a target='_blank' href='/2014.pdf'>1996</a></button>
        <button><a target='_blank' href='/2014.pdf'>1995</a></button>
        <button><a target='_blank' href='/2014.pdf'>1994</a></button>
        <button><a target='_blank' href='/2014.pdf'>1993</a></button>
        <button><a target='_blank' href='/2014.pdf'>1992</a></button>
        <button><a target='_blank' href='/2014.pdf'>1991</a></button>
        
        <button><a target='_blank' href='/2014.pdf'>1990</a></button>
        <button><a target='_blank' href='/2014.pdf'>1989</a></button>
        <button><a target='_blank' href='/2014.pdf'>1987</a></button>
        <button><a target='_blank' href='/2014.pdf'>1986</a></button>
        <button><a target='_blank' href='/2014.pdf'>1985</a></button>
        <button><a target='_blank' href='/2014.pdf'>1984</a></button>
        <button><a target='_blank' href='/2014.pdf'>1983</a></button>
        <button><a target='_blank' href='/2014.pdf'>1982</a></button>
        
        
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
        
        </motion.container>
        </motion.div>
        );
        
        export default Archive;