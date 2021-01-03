import React from 'react';

const Note = ({ children }) => {
  return (
    <div className="left-col w-0 h-0 hidden lg:block relative">
      <div className="pl-4 py-1 pr-0 rounded border-l-4 border-primary absolute">
        {children}
      </div>
    </div>
  );
};

export default Note;
