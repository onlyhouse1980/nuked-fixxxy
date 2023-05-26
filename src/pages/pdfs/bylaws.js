import React, { useState } from 'react';
export const App = () =>  {
  const [embedURL]=useState('https://drive.google.com/file/d/1wMxlrlq1APB6GuutUMPM1XdjhfEkPxeK/preview')
  return (
   <div className='container'>
    <h5>Water Use Efficiency</h5>
    <iframe src={embedURL} width="100%" height="480"></iframe>
  </div>

  )
}
  export default App;