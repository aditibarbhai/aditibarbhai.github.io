import React from 'react';
import styles from './components.module.scss';
import { Button, ButtonGroup } from '@material-ui/core';
import Social from './social';

const Menu = () => (
  <ButtonGroup orientation="vertical" variant="text" className={styles.menu}>
    <Button>
      <Social />
    </Button>
    <Button>
      <a href="/about"> About </a>
    </Button>
    <Button>
      <a href="/blog"> Blog </a>
    </Button>
  </ButtonGroup>
);

export default Menu;
