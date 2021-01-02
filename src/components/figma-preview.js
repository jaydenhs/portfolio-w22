import React from 'react';

const FigmaPreview = ({ src }) => {
  return (
    <iframe
      width="100%"
      //   height="600"
      className="h-screen py-4"
      src={src}
      allowfullscreen
    ></iframe>
  );
};

export default FigmaPreview;
