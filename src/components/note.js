import React from 'react';

const Note = ({ children }) => {
  return (
    <div className="left-col relative w-0 h-0">
      <div className="p-4 bg-yellow-50 rounded border-2 border-gray-100 absolute">
        {children}
      </div>
    </div>
  );
};

export default Note;
