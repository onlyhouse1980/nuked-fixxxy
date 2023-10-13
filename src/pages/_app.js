import React, { Component, memo } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css'
import "../css/customcss.css";

import PropTypes from 'prop-types';

function App({
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

export default memo(App);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    session: PropTypes.object,
  }).isRequired,
};
