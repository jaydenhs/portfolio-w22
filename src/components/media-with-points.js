import React from 'react';
import Image from '@utils/local-img';

const MediaWithPoints = ({ media, children }) => {
  return (
    <div
      className="flex mx-auto items-center even:flex-row-reverse"
      style={{ maxWidth: 960 }}
    >
      <Image src={media} className="max-h-screen" />
      {/* can't use space-x-# class because the flex direction reverses (margin on wrong side) */}
      <div className="mx-5"></div>
      <div className="flex-grow space-y-2">{children}</div>
    </div>
  );
};

export default MediaWithPoints;
