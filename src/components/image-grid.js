import React from 'react';
import Image from '@utils/local-img';

const ImageGrid = ({ images }) => {
  return (
    <div className="flex space-x-3 my-4">
      {images.map((value, index) => {
        return (
          <div className="flex-grow" key={index}>
            <Image fileName={value} className="w-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
