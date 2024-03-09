import React, { useState } from "react";
import styles from "../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/138cLOdgQe-NH56BaG8h00q7hZw1qWDT_/preview"
  );
  return (
    <div className={styles.container}>
      <h5>Consumer Confidence 2023</h5>
      <iframe
        className={styles.iframe}
        src={embedURL}
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
};

export default App;
