import Head from 'next/head'
import styles from '../styles/ContactErika.module.scss'

const ContactErika = () => {
    return (
        <div id={styles.bgWrap}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />        
          </Head>
    <img src='../../pugetcr.png' className={styles.fullscreenbg} />
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
            <div className={styles.formGroup, styles.solo, styles.right}>
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
)
}

export default ContactErika