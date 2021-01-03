import React from 'react';

const MiroEmbed = ({ title, board_src }) => {
  const embed_src = board_src.replace(`board`, `embed`) + '=/?autoplay=yep';

  return (
    <iframe
      title={title}
      width="100%"
      className="h-screen py-4"
      src={embed_src}
      frameborder="0"
      scrolling="no"
      allowfullscreen
    ></iframe>
  );
};

export default MiroEmbed;
