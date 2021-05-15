import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBCol,
    MDBRow
  } from 'mdbreact';
  import Head from 'next/head'
  import styles from '../styles/register.module.css'
  import VideoBg from '../components/VideoBg';
  import Zoom from 'react-reveal/Zoom';
  import { motion } from 'framer-motion'
  import React from 'react'
  import { MDBAnimation } from "mdbreact";
  
  
  
  
  <div suppressHydrationWarning={true}>
      { process.browser }
      <Head><script src="../../script.js" /></Head>
      </div>
  
  const Example1 = () => (
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <VideoBg />
    <React.Fragment>
    <Zoom>
      <MDBRow className='mt-5'>
        <MDBCol md='6' className='mx-auto'>
        <MDBAnimation type="flash" infinite>
        <a className={styles.a} href="/howtoreadmeter.pdf">How to read your meter?</a>
          </MDBAnimation>
          <MDBCard>
            <MDBCardImage
              className='img-fluid'
              src='../../Images/meter1.jpg'
            />
            <MDBCardBody>
              <form>
                <p className='h5 text-center mb-4'>Check Your Overages</p>
                <a href="" id="lnk"></a> 
                <div className='grey-text'>
                
                  <MDBInput
                    id='userInput'
                    label='Last Name'
                    icon='user'
                    type='text'
                  />
                </div>
                <div className='text-center'>                
                  <input type='button' onClick={function changeText2(){
                    var userInput = document.getElementById('userInput').value;
      var lnk = document.getElementById('lnk');
      lnk.href = "https://obcg.org/over/"+userInput;
      lnk.innerHTML = lnk.href;
      window.location = "https://obcg.org/over/"+userInput;
  }}
                     value='search'/>
                  
                </div>
              </form>
  
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </Zoom>
    </React.Fragment>
    
    </motion.div>
    
  );
  
  export default Example1;
  