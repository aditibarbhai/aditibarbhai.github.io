import React from 'react';
import Link from './link';
import styles from './components.module.scss';

const Copyright = () => (
  <div className={styles.copyright}>
    <p>
      &copy; 2020 Aditi Barbhai
    </p>
    <p>
      Photo by <Link type="external" href="https://unsplash.com/@8moments"> Simon Berger </Link>
    </p>
  </div>
);

export default Copyright;
