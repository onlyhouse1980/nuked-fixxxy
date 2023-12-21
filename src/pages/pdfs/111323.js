import styles from "../../styles/pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1KosFWqxpNCN1vwOL-44RJmNN4El0d7Rr/preview"
  );
  return (
    <div className="container">
      <h5>2023 Brd. Appt. Minutes</h5>
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
