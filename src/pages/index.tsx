import React from 'react';
import Head from 'next/head';
import Container from '../components/container';

import styles from './styles.module.scss';

const Index = () => (
  <>
    <Head>
      <title>Aditi Barbhai - Home</title>
    </Head>
    <Container>
      <h1 className={styles.cursive}>
        Hello! 🙋‍♀️ <br /> My name is Aditi.
      </h1>
      <p>
        I'm a software developer from Toronto, Canada 🍁.
      </p>
      <p>
        I specialize in building JavaScript web applications using React.js, Node.js
        and a host of <a href="#">other frameworks</a>.
      </p>
      <p>
        I have previously worked in consulting and healthcare spaces,
        and now work in fintech, creating beautiful, responsive and scalable apps
        that help people improve their financial life!
      </p>
      <p>
        Take a look around and read through to find out more <a href="/about">about me</a>,
        or drop me a line at aditi [dot] barbhai [at] gmail [dot] com!
        {/*  TODO: look into "MailHide" to obscure email address and save it from spambots */}
      </p>
    </Container>
  </>
);

export default Index;
