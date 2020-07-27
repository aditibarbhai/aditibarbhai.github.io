import React from 'react';
import Navigation from './navigation';

import styles from './components.module.scss';

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className={styles.layout}>
    <Navigation className={styles.sidebar} />
    <div className={styles.content}>
      { children }
    </div>
  </main>
);

export default Layout;
