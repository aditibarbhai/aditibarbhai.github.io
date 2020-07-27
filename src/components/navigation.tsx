import React from 'react';
import Menu from './menu';
import Copyright from './copyright';

import styles from './components.module.scss';

type SidebarProps = {
  className?: string;
}

const Navigation: React.FC<SidebarProps> = ({ className }) => (
  <div className={`${styles.navigation} ${className || ''}`}>
    <img src="/profile.jpeg" className={styles.profilePic} />
    <p className={styles.profileBlurb}>
      software developer, creator, cat person
    </p>
    <Menu />
    <Copyright />
  </div>
);

export default Navigation;
