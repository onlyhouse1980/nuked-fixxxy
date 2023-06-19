import styles from "../styles/executive.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

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
    <motion.container
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
            src="/Images/WebPFiles/team-1.webp"
            loading="lazy"
            width="300"
            alt="Member Photo President"
            className={styles.Image5}
          />
          <div className={styles.contentNameplate}>
            <p>
              President
              <br />
              Jim Farrell
              <br />
              {/* <Link href="/contactus1" passHref className={styles.clink}>
                Contact
              </Link> */}
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
              {/* <Link href="/contactus" passHref className={styles.clink}>
                Contact
              </Link> */}
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
              {/* <Link href="/contactus3" passHref className={styles.clink}>
                Contact
              </Link> */}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.container>
  </motion.div>
);

export default Executive;
