import React, { useState } from "react";
import styles from "../../../../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1F9I5NOzNpk1Zn1rdw8LWzA9691b5PJaC/preview"
  );
  return (
    <div className="container">
      <h5>1982 Annual Meeting Minutes</h5>
      <iframe
        className={styles.iframPDFBL}
        src={embedURL}
        width="100%"
        height="530"
      ></iframe>
    </div>
  );
};

export default App;
