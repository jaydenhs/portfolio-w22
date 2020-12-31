import React from 'react';
import './src/tailwind.css';
import App from '@components/app';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
