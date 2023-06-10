import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/13OdSlLrAttC1-AkULMd-gECWX6AHh1w3/preview"
  );
  return (
    <div className="container">
      <h5>Historical Meetings</h5>
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
