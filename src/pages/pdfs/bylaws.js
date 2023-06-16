import React, { useState } from "react";
import styles from "../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1wMxlrlq1APB6GuutUMPM1XdjhfEkPxeK/preview"
  );
  return (
    <div className="container">
      <iframe
        className={styles.iframPDF}
        src={embedURL}
        width="100%"
        height="1000px"
      ></iframe>
    </div>
  );
};

export default App;
