
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
                  <button className={styles.button}><a  href='/misc/waterline1982'>1982 Water line replacement</a></button>
                  <button className={styles.button}><a  href='/misc/legalproperty'>Legal property</a></button>
                  <button className={styles.button}><a  href='/misc/map-master-water-lines'>Map Water Line</a></button>
                  <button className={styles.button}><a  href='/misc/parkmaddings'>Park Madings Orchard Beach </a></button>
                  <button className={styles.button}><a  href='/misc/historicalmeetings'>Assorted Documents</a></button>
                </div>
              </div>
            </motion.container>
          </motion.div>
        );
        export default Misc;