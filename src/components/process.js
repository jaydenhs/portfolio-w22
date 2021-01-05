import React from 'react';
import Image from '@utils/gatsby-image-local';

const Process = ({ data }) => {
  return (
    <div className="space-y-5">
      {data.map(({ title, description, image }, index) => {
        return (
          <>
            <div className="flex items-center even:flex-row-reverse">
              <div className="w-2/3 mr-4">
                <Image fileName={image} />
              </div>
              <div className="w-1/3">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
            <Arrow />
          </>
        );
      })}
    </div>
  );
};

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136.11 216.25"
      className="absolute w-16 z-10"
    >
      <g>
        <g>
          <path
            d="M130.46,8.25C62.1,55.08,43.78,108.79,32.35,166.81"
            // style="fill:none; stroke:#b0b0b0; stroke-miterlimit:10; stroke-width:20px"
            fill="none"
            stroke="#b0b0b0"
            strokeMiterlimit="10"
            strokeWidth="20px"
          />
          <polygon
            points="0 150.51 23.46 216.25 68.67 163.07 0 150.51"
            fill="#b0b0b0"
          />
        </g>
      </g>
    </svg>
  );
};

export default Process;
