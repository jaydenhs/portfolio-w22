import React from "react";
import GlobalStyles from "@src/global-styles";

function App({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default App;
