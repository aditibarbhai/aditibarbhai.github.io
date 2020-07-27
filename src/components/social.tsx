import React from 'react';
import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

import styles from './components.module.scss';

type SocialProps = {
  className?: string;
};

const Social:React.FC<SocialProps> = ({ className }) => (
  <IconContext.Provider value={{ color: 'white', size:'20px' }}>
    <div className={`${styles.social} ${className || ''}`}>
      <a href="https://github.com/aditibarbhai" rel="noreferrer" target="_blank">
        <FiGithub />
      </a>
      <a href="http://ca.linkedin.com/in/aditibarbhai"rel="noreferrer" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://twitter.com/aditibarbhai"rel="noreferrer" target="_blank">
        <FiTwitter />
      </a>
      <a href="mailto:aditi.barbhai@gmail.com">
        <FiMail />
      </a>
    </div>
  </IconContext.Provider>
);

export default Social;
