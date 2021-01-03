import React from 'react';

const Note = ({ children }) => {
  return (
    <div className="left-col relative w-0 h-0">
      <div className="p-4 pr-0 rounded border-l-4 border-primary absolute">
        {children}
      </div>
    </div>
  );
};

export default Note;
