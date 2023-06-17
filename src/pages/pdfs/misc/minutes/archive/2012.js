//https://drive.google.com/file/d/1vHDSzG8-EDEY1jbb62Y3iW6RSQC-kWya/preview
import React, { useState } from "react";
import styles from "../../../../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/13l8pSBPdnQyHxaDLLdZIzTruuvo_L2Mw/preview"
  );
  return (
    <div className="container">
      <iframe
        className={styles.iframPDF}
        src={embedURL}
        width="100%"
        height="530"
      ></iframe>
    </div>
  );
};

export default App;
