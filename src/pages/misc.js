import VideoBg from '../components/VideoBg';
import styles from '../styles/misc.module.css';
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
        const Misc = () => (
          <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
            <VideoBg />
            <motion.container className={styles.bgcontainer}
            variants={container}
            initial="hidden"
            animate="show" >
              <h2 className='text-center'><b>OBCG</b><br /><b>Historical Documents</b></h2>
              <p></p>
              <div className={styles.divBlock}>
                <div className={styles.indDates}>
                  <button className={styles.button}><a  href='/misc/1982_Water_line_replacement.pdf'>1982 Water line replacement</a></button>
                  <button className={styles.button}><a  href='/misc/Legal_property.pdf'>Legal property</a></button>
                  <button className={styles.button}><a  href='/misc/Map_Master_Water_Line_Connections.pdf'>Map Water Line</a></button>
                  <button className={styles.button}><a  href='/misc/Park_Madings_Orchard_Beach.pdf'>Park Madings Orchard Beach </a></button>
                  <button className={styles.button}><a  href='/misc/Historical_Meetings_Notices_Letters.pdf'>Assorted Documents</a></button>
                </div>
              </div>
            </motion.container>
          </motion.div>
        );
        export default Misc;