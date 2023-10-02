import styles from "../../styles/pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1Fj5pEnQhuoSXwU02ucB5fw2ATrq-tfpk/preview"
  );
  return (
    <div className="container">
      <h5>September 2023 Special Meeting Minutes</h5>
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
