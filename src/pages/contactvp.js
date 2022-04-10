import Head from 'next/head'
import styles from '../styles/main.module.scss'
import { sendContactMail } from "../components/networking/mail-api"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      
      <h1 className={styles.h1}>Contact Erika Aust</h1>
      <p className={styles.subtitle}>Vice President, OBCG</p>
      <div id={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h4>Contact <br />Erika Aust</h4>
          <p>Vice President, OBCG</p>
          </div>
        
      
        <form>
          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input type="text" />
          </div>
          </div>
          <div className={styles.col}>
            <div className={styles.formGroup}>
            <label>Email</label>
              <input type="email" />
            </div>
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input type="tel" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.solo}>
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>
        </div>
    </>
)
}
