import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

import styles from './components.module.scss';

const Social = () => (
  <div className={styles.social}>
    <a href="https://github.com/aditibarbhai" rel="noreferrer" target="_blank">
      <GitHubIcon />
    </a>
    <a href="http://ca.linkedin.com/in/aditibarbhai"rel="noreferrer" target="_blank">
      <LinkedInIcon />
    </a>
    <a href="https://twitter.com/aditibarbhai"rel="noreferrer" target="_blank">
      <TwitterIcon />
    </a>
    <a href="mailto:aditi.barbhai@gmail.com">
      <EmailIcon />
    </a>
  </div>
);

export default Social;
