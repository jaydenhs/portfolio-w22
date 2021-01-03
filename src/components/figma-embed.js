import React from 'react';

const FigmaEmbed = ({ title, src }) => {
  return (
    <iframe
      title={title}
      width="100%"
      className="h-screen py-4"
      src={src}
      allowfullscreen
    ></iframe>
  );
};

export default FigmaEmbed;
