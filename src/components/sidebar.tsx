import React from 'react';
import { Avatar } from '@material-ui/core';
import Menu from './menu';
import Copyright from './copyright';

import styles from './components.module.scss';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Avatar
      className={styles.profilePic}
      src="/profile.jpeg"
      alt="aditi profile"
    />
    <p className={styles.profileBlurb}>
      software developer, creator, cat person
    </p>
    <Menu />
    <Copyright />
  </div>
);

export default Sidebar;
