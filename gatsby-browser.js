import React from "react";
import "./src/tailwind.css";
import "./src/css-variables.css";
import App from "@components/app";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export const wrapRootElement = ({ element }) => {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <App>{element}</App>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
