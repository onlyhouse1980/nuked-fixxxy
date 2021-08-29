import { MDBContainer } from 'mdbreact';
import NavBar from './NavBar';
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
    
      <NavBar />
      <MDBContainer>{props.children}</MDBContainer>
      
      <Footer />
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          max-width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%; height: "auto";
          

          
        },
      .Image .resizer {
        width: 100%; height:"auto"
      }
      `}</style>      
    </>
  );
}

export default Layout;
