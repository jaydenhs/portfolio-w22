import React from 'react';

import { ThemeProvider } from '@utils/theme-context';
import GlobalStyles from '@src/global-styles';

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
