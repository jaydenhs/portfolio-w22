import React from 'react';
import Img from '@utils/local-img';

const RoomObject = ({ src, width, left, top }) => {
  return (
    <div
      className="absolute h-auto"
      style={{
        width: `${width}%`,
        left: `${left}%`,
        top: `${top}%`,
      }}
    >
      <Img src={src} />
    </div>
  );
};

export default RoomObject;
