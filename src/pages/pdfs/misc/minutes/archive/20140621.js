import React, { useState } from "react";
import styles from "../2022Minutes.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1zJRynuWXjQY63jcr04hz_47jMvG_0JBL/preview"
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
