import React from 'react';
import Container from '@material-ui/core/Container';

import styles from './styles.module.scss';

const About = () => (
  <>
    <Container className={styles.content}>
      <h1 className={styles.cursive}>
        About Me
      </h1>
    </Container>
  </>
);

export default About;
