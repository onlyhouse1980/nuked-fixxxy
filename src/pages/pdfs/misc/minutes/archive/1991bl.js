import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1glINGeSGZikp01hembzP3XXEN8_SoNfV/preview"
  );
  return (
    <div className="container">
      <h5>1991 Bylaws</h5>
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
