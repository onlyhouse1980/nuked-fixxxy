import styles from "../../../../../styles/pdfs.module.css";
import React, { useState } from "react";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1pW98Aw77PzY-xBrIDcAhvbVRkyPT5L-X/preview"
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
