import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1wMxlrlq1APB6GuutUMPM1XdjhfEkPxeK/preview"
  );
  return (
    <div className="container">
      <h5>Map Master Water Lines</h5>
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
