import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon"
        type="image/png"
        href="/images/code.jpg" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
