import Link from 'next/link';
import styles from '../styles/misc.module.css';
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
              <h2 className='text-center'><b>OBCG</b><br /><b>Historical Documents</b></h2>
              <p></p>
              <div className={styles.divBlock}>
                <div className={styles.indDates}>
                  <button className={styles.button}><Link  href='/pdfs/misc/waterline1982'>1982 Water line replacement</Link></button>
                  <button className={styles.button}><Link  href='/pdfs/misc/legalproperty'>Legal property</Link></button>
                  <button className={styles.button}><Link  href='/pdfs/misc/map-master-water-lines'>Map Water Line</Link></button>
                  <button className={styles.button}><Link  href='/pdfs/misc/parkmaddings'>Park Madings Orchard Beach </Link></button>
                  <button className={styles.button}><Link  href='/pdfs/misc/historicalmeetings'>Assorted Documents</Link></button>
                </div>
              </div>
            </motion.container>
          </motion.div>
        );
        export default Misc;