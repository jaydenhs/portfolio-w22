import React from 'react';
import './src/tailwind.css';
import './src/css-variables.css';
import App from '@components/app';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
