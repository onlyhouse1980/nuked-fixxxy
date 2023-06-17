import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1YNm4-jI4pYMvA2hYYhwUkcK-kq1GIipo/preview"
  );
  return (
    <div className="container">
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
