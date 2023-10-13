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
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion'
import React from 'react'
import { MDBAnimation } from "mdbreact";
import useSWR from 'swr'

export default function Register() {
  return(
    <motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1 }}>
    <React.Fragment>
    <div suppressHydrationWarning={true}>
      { process.browser }
    
</div>
  <Zoom>
    <MDBRow className='mt-5'>
      <MDBCol md='6' className='mx-auto'>
      <MDBAnimation type="flash" infinite>
      <a className={styles.a} href="/howtoreadmeter.pdf">How to read your meter?</a>
        </MDBAnimation>
        <MDBCard className={styles.mdbkard}>
          <MDBCardImage
            className='img-fluid'
            src='../../Images/meter1.webp'
          />
          <MDBCardBody className={styles.cardBody}>
            <form>
              <p className='h5 text-center mb-4'>Check Your Usage</p>
              <a href="" id="lnk"></a> 
              <div className='grey-text'>
              <label for="one" className="remove">
                <MDBInput className={styles.userInput}
                  id='userInput'
                  label='Serial Number'
                  icon='user'
                  type='text'
                  
                />
                </label>
              </div>
              <div className='text-center'>                
                <input className={styles.button} type='button' onClick={function changeText2(){
                  var userInput = document.getElementById('userInput').value;
    var lnk = document.getElementById('lnk');
    lnk.href = "./person/"+userInput;
    lnk.innerHTML = lnk.href;
    window.location = "./person/"+userInput;
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
  
)}
