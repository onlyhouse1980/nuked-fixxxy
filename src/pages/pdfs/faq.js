

import React, { useState } from 'react';
export const App = () =>  {
  const [embedURL]=useState('https://drive.google.com/file/d/1UMRu5mqLPx2s1qTNNtWIU9p3RIePgvAN/preview')
  return (
   <div className='container'>
    <h5>Frequently Asked...</h5>
    <iframe src={embedURL} width="100%" height="500"></iframe>
  </div>

  );
}

export default App;