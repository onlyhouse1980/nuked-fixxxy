
  import React, { useState } from 'react';
export const App = () =>  {
  const [embedURL]=useState('https://drive.google.com/file/d/19seZvVdTG5O5Q0H1qdrh_F6MG1ZcLfto/preview')
  return (
   <div className='container'>
    <h5>Franchise Permit</h5>
    <iframe src={embedURL} width="100%" height="500"></iframe>
  </div>

  );
}

export default App;