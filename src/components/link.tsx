import React from 'react';
import NextLink from 'next/link';

type LinkProps = {
  type: 'internal' | 'external';
  href: string;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  type,
  href,
  className,
  children,
  ...otherProps
}) => {
  if (type === 'external') {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        {...otherProps}
      >
        { children }
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className} {...otherProps}>
        { children }
      </a>
    </NextLink>
  );
};

export default Link;
