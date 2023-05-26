import React, { useState } from 'react';
export const App = () =>  {
  const [embedURL]=useState('https://drive.google.com/file/d/1LkpS55BOe5YzoeHwnCNpe8cNYlM3jWsh/preview')
  return (
   <div className='container'>
    <h1>Water Use Efficiency</h1>
    <iframe src={embedURL} width="640" height="480"></iframe>
  </div>

  );
}

export default App;