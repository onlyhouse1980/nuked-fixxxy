import React, { useState } from "react";
import styles from "../../../../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1GetWbBe20xPjJNGj_FJyAWFSuLZLXLqP/preview"
  );
  return (
    <div className="container">
      <h5>1982 Bilaws</h5>
      <iframe
        className={styles.iframPDFBL}
        src={embedURL}
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
};

export default App;
