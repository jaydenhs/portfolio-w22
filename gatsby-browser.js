import React from 'react';
import './src/tailwind.css';
import App from './src/components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
