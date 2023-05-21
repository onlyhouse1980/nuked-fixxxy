import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import ControlledCarousel from'../Components/Carousel'
import styles from './consumer.module.css'



export default function Consumer() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
       
      <div className="ratio ratio-4x3"  >
                <iframe src='/consumer.pdf'
                allowFullScreen className={styles.ExternalFiles} 
                 
                
                
                 ></iframe>
            </div>
      {/* <ControlledCarousel /> */}
      {/* <Post /> */}
      {/* <Footer /> */}
    </>
  );
}
