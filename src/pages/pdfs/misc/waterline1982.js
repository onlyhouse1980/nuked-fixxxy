import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/10t046NkzpKxygx7QSsJ11NBl7MpwbXi2/preview"
  );
  return (
    <div className="container">
      <h5>Water Line 1982</h5>
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
