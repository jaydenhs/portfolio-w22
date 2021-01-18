import React from 'react';
import Image from '@utils/local-img';

const PhotoLayout = ({ src_array }) => {
  console.log({ src_array });
  return (
    <>
      {src_array.map((src, i) => {
        return (
          <Image
            src={src}
            className="max-h-screen"
            imgStyle={{ objectFit: 'contain', margin: '1rem 0 1rem 0' }}
          />
        );
      })}
    </>
  );
};

export default PhotoLayout;
