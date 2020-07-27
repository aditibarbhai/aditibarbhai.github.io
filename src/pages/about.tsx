import React from 'react';
import Container from '../components/container';

import styles from './styles.module.scss';

const About = () => (
  <>
    <Container className={styles.about}>
      <img src="/react.svg" alt="React.js" />
      <img src="/nextjs.png" alt="Next.js" />
      # Tech Stack
      React
      React Native
      Next.js
      Node.js
      SQL
      Sass / Less
      Git
      NPM / Yarn
      Postgres

      # Languages
      JavaScript
    </Container>
  </>
);

export default About;
