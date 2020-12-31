import React from 'react';
import './src/tailwind.css';
import App from '@components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
