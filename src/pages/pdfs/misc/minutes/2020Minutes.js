import React, { useState } from "react";
import styles from "./2023Minutes.module.css";

export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/176iuKzSUSMfiElpKZgCFa7XQfuQfNPWo/preview"
  );
  return (
    <div className={styles.container}>
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
