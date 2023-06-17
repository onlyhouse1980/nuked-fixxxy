import styles from "../../../../../styles/pdfs.module.css";

import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1SbzIL_fsnXrn_JfadTAgnPEes6FTa1n8/preview"
  );
  return (
    <div className="container">
      <h5>1982 Special Meeting</h5>
      <iframe
        className={styles.iframPDFBL}
        src={embedURL}
        width="100%"
        height="530"
      ></iframe>
    </div>
  );
};

export default App;
