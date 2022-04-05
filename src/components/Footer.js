import React from 'react'
import styles from '../styles/WelcomePage.module.css'
import Image from 'next/image';

const FooterPage = () => {
  return (
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <Image src="/Images/anewshade.png" alt="aNewShade Logo" height="30px" width="40px" className={styles.footerLogo} /></a>
      </div>
  );
};

export default FooterPage;
