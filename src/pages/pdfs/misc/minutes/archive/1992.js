import React, { useState } from "react";
export const App = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1Fh74MRtjP2oC2FFV4ts2mibhNcXnXva6/preview"
  );
  return (
    <div className="container">
      <iframe src={embedURL} width="100%" height="500"></iframe>
    </div>
  );
};

export default App;
