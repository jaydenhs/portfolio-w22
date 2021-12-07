import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const BetterImage = ({ path }) => {
  // console.log(path);
  return <GatsbyImage image={path} />;
};

export default BetterImage;
