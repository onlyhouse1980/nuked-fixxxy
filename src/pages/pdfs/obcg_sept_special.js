
import styles from "../../styles/pdfs.module.css";
import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1_V_2Q7sqBh3se6uqP9Q0iEGIdi7IIb0t/preview"
  );
  return (
    <div className="container">
      <h5>September 2023 Special Meeting Agenda</h5>
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
