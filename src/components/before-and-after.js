import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';

const BeforeAndAfter = ({ title, steps }) => {
  return (
    <div>
      {/* {title} */}
      {steps.map(({ beforeImage, before, after }, index) => {
        return (
          <div className="flex space-x-4">
            <div className="w-1/6 relative">
              <Image fileName={beforeImage} />
              {before.map(({ content, x, y }, index) => {
                return <Bubble content={`"${content}"`} x={x} y={y} />;
              })}
            </div>
            {/* <Arrow /> */}
            {/* <div>
              {after.map((value, index) => {
                return <Bubble className="bg-blue-400">{value}</Bubble>;
              })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

const Arrow = () => {
  return (
    <svg
      width="74"
      height="35"
      viewBox="0 0 74 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 17.5H45.5" stroke="var(--gray200)" stroke-width="14" />
      <path d="M45.5 35V0L73.5 17.5L45.5 35Z" fill="var(--gray200)" />
    </svg>
  );
};

const Bubble = styled.div(
  ({ content, x, y }) => css`
    content: '';
    //offset transforms by dot and border width to simplify data input
    left: calc(${x}% - 0.375rem - 1.5px);
    top: calc(${y}% - 0.375rem - 1.5px);
    ${tw`w-4 h-4 block rounded-full absolute border-3 border-primary`}

    &:before {
      content: '';
      left: 0px;
      top: 0px;
      ${tw`absolute w-8 border-solid border-t-3 border-primary`}
    }
  `
);

// const Bubble = styled.div(
//   ({ content, x, y }) => css`
//     //offset transforms by dot and border width to simplify data input
// left: calc(${x}% + 0.35rem);
// top: calc(${y}% - 0.1rem);
// ${tw`absolute w-8 border-solid border-t-3 border-primary`}

//     &:before {
//       content: '';
//       /* left: calc(${x}% - 0.375rem - 1px);
//       top: calc(${y}% - 0.375rem - 1px); */
//       left: calc(-1rem + 2.5px);
//       top: calc(-1rem + 6.25px);
//       ${tw`w-4 h-4 block rounded-full absolute border-3 border-primary`};
//     }

//     /* ${tw`p-4 text-white rounded-lg w-72`} */
//   `
// );

export default BeforeAndAfter;
