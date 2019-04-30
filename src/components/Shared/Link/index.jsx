import React from 'react';

const Link = React.forwardRef(
  ({ to, children }, ref) => (
    <a
      ref={ref}
      href={to}
    >
      {children}
    </a>
  )
);

export default Link;
