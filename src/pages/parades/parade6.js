import styles from '../../styles/About.module.css'
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom'



const Parade2001 = () => (
<motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
   
    <Zoom top>
    <motion.div className={styles.content}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <video className='fixed z-\[-1\]' controls muted loop style={{ width: '100%', height: '100%' }}
         src="https://res.cloudinary.com/dfnaxhqqq/video/upload/v1709113418/2023_Parade_fqpwlo.mp4#t=0.001" />
		 
    </motion.div>
    </Zoom>
  </motion.div>

);

export default Parade2001;
