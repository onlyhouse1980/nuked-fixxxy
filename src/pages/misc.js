import VideoBg from '../components/VideoBg';
import styles from '../styles/misc.module.css';
import { motion } from 'framer-motion'

        
        
        
        
        
        const Misc = () => (
          <div>
            <VideoBg /> 
            <div className={styles.bgcontainer}>
            <h2 className='text-center'><b>OBCG</b><br /><b>Historical Documents</b></h2>
            
            <div className={styles.divBlock}>
            
        
        <div className={styles.indDates}>
        
        
        
        <button className={styles.button1}><a  href='/misc/1982_Water_line_replacement.pdf'>1982 Water line replacement</a></button>
        <button className={styles.button1}><a  href='/misc/Legal_property.pdf'>Legal property</a></button>
        <button className={styles.button1}><a  href='/misc/Map_Master_Water_Line_Connections.pdf'>Map Water Line</a></button>
        <button className={styles.button1}><a  href='/misc/Park_Madings_Orchard_Beach.pdf'>Park Madings Orchard Beach </a></button>
        </div>
        </div>
        
        </div>
        </div>
        );
        
        export default Misc;