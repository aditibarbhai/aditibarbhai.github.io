import React from 'react';
import styles from './components.module.scss';

type ContainerProps = {
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={`${styles.container} ${className || ''}`}>
    { children }
  </div>
);

export default Container;
