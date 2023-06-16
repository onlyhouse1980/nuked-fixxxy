import styles from "../../styles/pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/14AbNqAL7drm7Ucyzz1ReiNst_E6Jy5Qo/preview"
  );
  return (
    <div className="container">
      <h5>Consumer Confidencce 2020</h5>
      <iframe
        className={styles.iframPDF}
        src={embedURL}
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
};

export default App;
