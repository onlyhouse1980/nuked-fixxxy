import React, { useState } from 'react';
export const App = () =>  {
  const [embedURL]=useState('https://drive.google.com/file/d/1wMxlrlq1APB6GuutUMPM1XdjhfEkPxeK/preview')
  return (
   <div className='container'>
    <h1>Water Use Efficiency</h1>
    <iframe src={embedURL} width="640" height="480"></iframe>
  </div>

  )
}
  export default App;