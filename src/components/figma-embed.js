import React from 'react';

const FigmaEmbed = ({ title, src, hideUI }) => {
  return (
    <iframe
      allowfullscreen
      title={title}
      width="100%"
      className="h-screen"
      src={src + (hideUI && '%26hide-ui%3D1')}
    />
  );
};
export default FigmaEmbed;
