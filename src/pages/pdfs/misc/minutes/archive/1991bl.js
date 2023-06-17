import React, { useState } from "react";
import styles from "../2023Minutes.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1glINGeSGZikp01hembzP3XXEN8_SoNfV/preview"
  );
  return (
    <div className="container">
      <h5>1991 Bylaws</h5>
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
