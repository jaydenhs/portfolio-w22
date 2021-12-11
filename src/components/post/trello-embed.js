import React from 'react';

const TrelloEmbed = ({ title, src }) => {
  return (
    <iframe
      title={title}
      width="100%"
      className="h-128"
      src={src + '.html'}
      frameBorder="0"
    ></iframe>
  );
};

export default TrelloEmbed;
