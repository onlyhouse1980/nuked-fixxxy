import { MDBContainer } from 'mdbreact';
import Navbar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import React from 'react'



function Layout(props) {
  return (
    <>
     <Head>
      <title>Orchard Beach Community Group - Water District</title>
      <meta name="description" content="Orchard Beach Community Group Water Management"></meta>
      

        
    
    </Head>
    
      <Navbar style='z-index:10!important'/>
      <MDBContainer style={{paddingTop:30}}>{props.children}</MDBContainer>
      
      <Footer />
      <style jsx global>{`
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

           
          </style> 
               
    </>
    
  );
}

export default Layout;
