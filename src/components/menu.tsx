import React from 'react';
import styles from './components.module.scss';
import Social from './social';

const Menu = () => (
  <div className={styles.menu}>
    <Social className={styles.menuItem} />
    <a className={styles.menuItem} href="/"> Home </a>
    <a className={styles.menuItem} href="/about"> About </a>
    <a className={styles.menuItem} href="/blog"> Blog </a>
  </div>
);

export default Menu;
