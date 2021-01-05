import React from 'react';

const BeforeAndAfter = ({ title, steps }) => {
  return (
    <p>
      {title}
      {steps.map(({ before, after }, index) => {
        return (
          <>
            {before.map((value, index) => {
              return <p>"{value}"</p>;
            })}
            {after.map((value, index) => {
              return <p>{value}</p>;
            })}
          </>
        );
      })}
    </p>
  );
};

export default BeforeAndAfter;
