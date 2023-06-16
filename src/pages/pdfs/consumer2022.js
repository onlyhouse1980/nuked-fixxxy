import styles from "../../styles/pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1jJbNsfyhuwLOaFYmoqll0tFeCnsRnOWk/preview"
  );
  return (
    <div className="container">
      <h5>Consumer Confidence 2021</h5>
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
