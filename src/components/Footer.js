import React from 'react'
import styles from '../styles/WelcomePage.module.css'
import Image from "next/legacy/image";

const FooterPage = () => {
  return (
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <Image src="/Images/anewshade.webp" alt="aNewShade Logo" height="30" width="40" className={styles.footerLogo} /></a>
      </div>
  );
};

export default FooterPage;
