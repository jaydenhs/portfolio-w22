import React from 'react';

const FigmaEmbed = ({ title, src }) => {
  return (
    <iframe
      allowfullscreen
      title={title}
      width="100%"
      className="h-screen py-4"
      src={src}
    ></iframe>
  );
};

export default FigmaEmbed;
