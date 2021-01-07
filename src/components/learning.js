import React, { useEffect } from 'react';

let increment = 0;

const Learning = ({ title, children }) => {
  useEffect(() => {
    //must reset increment or else subsequent loads will start with incremented amount
    increment = 0;
  }, []);
  increment++;

  return (
    <>
      <div className="py-8">
        <div className="flex space-x-4 items-center mb-4">
          <div className="flex flex-col items-center">
            <span className="flex items-center w-16 h-16 rounded-full bg-primary text-background">
              <span className="mx-auto pt-0.5 text-3xl font-bold">
                {`${increment}`.padStart(2, '0')}
              </span>
            </span>
          </div>
          <h2 className="mt-0.5">{title}</h2>
        </div>
        {children}
      </div>
    </>
  );
};

export default Learning;
