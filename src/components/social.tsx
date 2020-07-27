import React from 'react';
import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Link from './link';

import styles from './components.module.scss';

type SocialProps = {
  className?: string;
};

const Social:React.FC<SocialProps> = ({ className }) => (
  <IconContext.Provider value={{ color: 'white', size: '20px' }}>
    <div className={`${styles.social} ${className || ''}`}>
      <Link type="external" href="https://github.com/aditibarbhai">
        <FiGithub />
      </Link>
      <Link type="external" href="https://ca.linkedin.com/in/aditibarbhai">
        <FiLinkedin />
      </Link>
      <Link type="external" href="https://twitter.com/aditibarbhai">
        <FiTwitter />
      </Link>
      <Link type="external" href="mailto:aditi.barbhai@gmail.com">
        <FiMail />
      </Link>
    </div>
  </IconContext.Provider>
);

export default Social;
