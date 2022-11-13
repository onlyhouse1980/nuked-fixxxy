import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css'



export default function App ({
  Component,
  pageProps: { session, ...pageProps },
  }) {
    return (
      
      <Layout>

      <AnimatePresence mode="wait">
        <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
      
    );
  }

