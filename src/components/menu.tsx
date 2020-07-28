import React from 'react';
import styles from './components.module.scss';
import Link from './link';
import Social from './social';

const Menu = () => (
  <div className={styles.menu}>
    <Social className={styles.menuItem} />
    <Link type="internal" className={styles.menuItem} href="/"> Home </Link>
    <Link type="internal" className={styles.menuItem} href="/about"> About </Link>
    <Link type="external" className={styles.menuItem} href="https://aditibarbhai.wordpress.com/"> Blog </Link>
  </div>
);

export default Menu;
