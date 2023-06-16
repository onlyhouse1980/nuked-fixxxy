import styles from "./pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1C5qGn2uNg4T6pxUdgwVobAlTngwSJa-N/preview"
  );
  return (
    <div className="container">
      <h5>Consumer Confidencce 2022</h5>
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
