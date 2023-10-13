
import styles from '../styles/Articles.module.css'
// import VideoBg1 from '../components/VideoBg1'
import { motion } from 'framer-motion';

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



export default function Articles() {
  return(
  <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
  
    <motion.container className={styles.bgcontainer}
    variants={container}
    initial="hidden"
    animate="show"
    >
    <div className={styles.content}>
    <motion.h2 variants={item} className='text-center'>Articles of Incorporation</motion.h2><br /><br />
    <motion.p variants={item}><b>FIRST:</b> The name of the corporation is ORCHARD BEACH COMMUNITY GROUP.</motion.p>
‍
<motion.p variants={item}><b>SECOND:</b> The period of its duration is perpetual.</motion.p>
‍
<motion.p variants={item}><b>THIRD:</b> The purposes for which this corporation is formed are as follows:</motion.p>
<motion.p variants={item}><b>A)</b> To maintain a community water system and undertake other community projects and activities as decided by the Board of Directors and to promote the general interest and welfare of the Orchard Beach Community.</motion.p>
‍
<motion.p variants={item}><b>FOURTH:</b> The corporation shall have all powers granted by law necessary and proper to carry out its above-stated purposes consistent with its qualifications under 501 (c) (3).</motion.p>
‍
<motion.p variants={item}><b>FIFTH:</b> All corporate activities should be governed by the Board of Directors and as provided in the corporate by-laws. Three directors shall constitute a quorum and all decisions shall require the majority vote of the quorum to be binding.</motion.p>
‍
<motion.p variants={item}><b>SIXTH:</b> In the event of dissolution, the assets of the corporation shall be distributed only to a recipient or recipients, to be selected by the Board of Directors, that would qualify for exemption as an organization described in Section 501(c) (3) of the Internal Revenue Code of 1954, as amended, or a successor statute.</motion.p>
‍
<motion.p variants={item}><b>SEVENTH:</b> The address of the initial registered office of the corporation is...” Filed with the Secretary of State – August 27, 1974</motion.p>
    </div>
    </motion.container>
  </motion.div>
)}
