import React from 'react';

const Note = ({ children, left }) => {
  return (
    // move to selected column
    <div
      className={`${
        left ? 'left' : 'right'
      }-col w-0 h-0 hidden lg:block relative}`}
    >
      {/* add padding when on right side */}
      <div
        className={`pl-4 py-1 pr-${
          left ? '0' : '6'
        } rounded border-l-4 border-primary absolute text-gray-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Note;
