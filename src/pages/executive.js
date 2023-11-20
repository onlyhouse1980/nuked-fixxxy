import styles from "../styles/executive.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Executive = () => (
  <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >    
    <motion.div
      className={styles.bgcontainer}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-center">
        <b>OBCG</b>
        <br />
        <b>Executive Board</b>
      </h2>
      <div className={styles.divBlock}>
       
        <motion.div variants={item} className={styles.content}>
          <motion.img
            src="/Images/WebPFiles/Dennis.webp"
            loading="lazy"
            width="300"
            alt="Member President Photo Dennis"
            className={styles.Image5}
          />
          <div className={styles.contentNameplate}>
            <p>
              President
              <br />
              Dennis Frett
              <br />
              
            </p>
          </div>
        </motion.div>
        <motion.div variants={item} className={styles.content}>
          <motion.img
            src="/Images/WebPFiles/team-2.webp"
            loading="lazy"
            width="300"
            alt="Member Vice President Photo Erika Aus"
            className={styles.Image5}
          />
          <div className={styles.contentNameplate}>
            <p>
              Vice President
              <br />
              Erika Aust
              <br />
              
            </p>
          </div>
        </motion.div>
        <motion.div variants={item} className={styles.content}>
          <motion.img
            src="https://res.cloudinary.com/dfnaxhqqq/image/upload/c_scale,h_778,w_778/v1686608652/obcg/IMG-20230612-WA0001_unoemy.webp"
            loading="lazy"
            width="300"
            alt="Member Photo Secretary/Treasurer"
            className={styles.Image5}
          />
          <div className={styles.contentNameplate}>
            <p>
              Secretary/Treasurer
              <br />
              DeeDee Benitez
              <br />
              
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export default Executive;
