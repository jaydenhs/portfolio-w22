import React from 'react';
import { Link } from 'gatsby';

const regex = /^((?!static).)*$/;

const AutoLink = ({ to, children, ...rest }) => {
  // internal link if to does not have "static" in it (primarily for resume) and does not start with /
  const internal = regex.test(`${to}`) && `${to}`.startsWith('/');

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
