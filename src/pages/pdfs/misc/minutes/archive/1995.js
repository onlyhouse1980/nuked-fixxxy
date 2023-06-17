import React, { useState } from "react";
import styles from "../2023Minutes.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1c4suUCOlrlESGt15nhdlItUE84htAyVl/preview"
  );
  return (
    <div className="container">
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
