import React from 'react';
import Sidebar from './sidebar';

import styles from './components.module.scss';

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className={styles.page}>
    <div className={styles.sidebarContainer}>
      <Sidebar />
    </div>
    { children }
  </main>
);

export default Layout;
