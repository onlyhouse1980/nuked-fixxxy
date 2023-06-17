//https://drive.google.com/file/d/1gs9-VH-BR3lDERmGGV8pHC8pM-GINZYK/preview
import React, { useState } from "react";
import styles from "../../../../../styles/pdfs.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1gs9-VH-BR3lDERmGGV8pHC8pM-GINZYK/preview"
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
