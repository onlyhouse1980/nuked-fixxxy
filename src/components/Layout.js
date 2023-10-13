import { MDBContainer } from 'mdbreact';
import Navbar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import React from 'react'
import styles from "../styles/styles.module.css"



export default function Layout(props) {
  return (
    <>
     <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{props.title}</title>
      <meta name="description" content={props.description}></meta>
      

        
    
    </Head>
    
      <Navbar style='z-index:10!important'/>
      <MDBContainer style={{width:'100%'}}>{props.children}</MDBContainer>
      
      <Footer />
      {/* <style jsx global>{`
          endregion__next {
          max-width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 80%; 
          
          

          
        }
      .Image .resizer {
        width: 100%; height:"auto"
      }
      `}

           
          </style>  */}
               
    </>
    
  );
}

