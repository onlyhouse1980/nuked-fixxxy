import React, { Component } from 'react';
import App from 'next/app';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import { AnimatePresence } from "framer-motion";
import Head from 'next/head';
import '../styles/globals.css'



export default class MyApp extends App {
  

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      
      <Layout>

      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
      
    );
  }
}
