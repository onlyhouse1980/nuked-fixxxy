import React, { useState } from "react";
import styles from "../../../../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1lLYeqYJvOD3xcZap_-ZbipkvpQoW08pQ/preview"
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
