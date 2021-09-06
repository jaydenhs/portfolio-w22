import React from 'react';
import ReactMarkdown from 'react-markdown';

const NumberedList = ({ data }) => {
  return (
    <>
      <div className="divide-y divide-gray-200">
        {data.map(({ title, description }, index) => (
          // can't use space-y-8 with dividers
          <div className="py-8" key={index}>
            <div className="flex space-x-4 items-start">
              <div className="flex flex-col items-center">
                <span className="flex items-center w-16 h-16 rounded-full bg-primary text-background">
                  <span className="mx-auto pt-0.5 text-3xl font-bold">
                    {`${index + 1}`.padStart(2, '0')}
                  </span>
                </span>
              </div>
              <div>
                <h3 className="mt-0.5 mb-1">{title}</h3>
                <ReactMarkdown source={`${description}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NumberedList;
