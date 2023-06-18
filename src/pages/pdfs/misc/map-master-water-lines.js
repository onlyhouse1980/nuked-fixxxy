import styles from "../../../styles/pdfs.module.css";
import React, { useState } from "react";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1a9PIyIOsNl5-cauzBE-bNGQMlTaaFZPR/preview"
  );
  return (
    <div className="container">
      <h5>Map Master Water Lines</h5>
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
