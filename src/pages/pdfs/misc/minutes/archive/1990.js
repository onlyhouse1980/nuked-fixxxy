import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1czK8fSEbMnLm9nKxsH067dK-c2QXIqEs/preview"
  );
  return (
    <div className="container">
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
