import React, { useState } from "react";
import styles from "../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1C5qGn2uNg4T6pxUdgwVobAlTngwSJa-N/preview"
  );
  return (
    <div className={styles.container}>
      <h5>Consumer Confidence 2022</h5>
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
