import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QueriedImage = ({ localImages, filename, ...rest }) => {
  const image = localImages.find((n) =>
    n?.childImageSharp?.gatsbyImageData?.images?.fallback?.src.includes(filename)
  );
  return (
    <div className="w-full flex items-center">
      <GatsbyImage image={getImage(image)} {...rest} />
    </div>
  );
};

export default QueriedImage;
