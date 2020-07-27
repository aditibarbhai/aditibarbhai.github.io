import React from 'react';

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
  const props = {
    ...(type === 'external' && { target: '_blank', rel: 'noreferrer' })
  };

  return (
    <a
      href={href}
      className={className}
      {...props}
      {...otherProps}
    >
      { children }
    </a>
  );
};

export default Link;
