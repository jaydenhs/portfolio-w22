import React from 'react';
import { Link } from 'gatsby';

const AutoLink = ({ to, children, ...rest }) => {
  const internal = to.startsWith('/');

  console.log({ to, internal });

  return (
    <>
      {internal ? (
        <Link to={to} {...rest}>
          {children}
        </Link>
      ) : (
        <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      )}
    </>
  );
};

export default AutoLink;
