import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';

let increment = 0;

const BeforeAndAfter = ({ title, steps }) => {
  increment++;
  return (
    <div className="my-4">
      <div className="mx-auto flex flex-col items-center">
        <h2 className="p-3 rounded-full bg-primary text-white mr-2 mb-4">
          0{increment}
        </h2>
        <h2>{title}</h2>
      </div>
      {steps.map(({ beforeImage, afterImage, before, after }, index) => {
        return (
          <div className="flex space-x-4 -mt-24" key={index}>
            <div className="w-1/5 relative">
              <Image fileName={beforeImage} />
              {before.map(({ x, y }, index) => {
                return <Annotation x={x} y={y} left={true} key={index} />;
              })}
            </div>
            <div className="w-1/4 relative">
              {before.map(({ content, y, shift }, index) => {
                return (
                  <Bubble
                    y={y}
                    shift={shift}
                    key={index}
                    className="bg-primary-light"
                  >
                    "{content}"
                  </Bubble>
                );
              })}
            </div>
            <div className="w-1/12 flex items-center">
              <Arrow />
            </div>
            <div className="w-1/4 relative">
              {after.map(({ content, y, shift }, index) => {
                return (
                  <Bubble
                    y={y}
                    shift={shift}
                    key={index}
                    className="bg-primary-light"
                  >
                    {content}
                  </Bubble>
                );
              })}
            </div>
            <div className="w-1/5 relative">
              <Image fileName={afterImage} />
              {after.map(({ x, y }, index) => {
                return <Annotation x={x} y={y} left={false} key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Arrow = () => {
  return (
    <svg
      // width="74"
      // height="35"
      viewBox="0 0 74 35"
      className="w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 17.5H45.5" stroke="var(--gray200)" stroke-width="14" />
      <path d="M45.5 35V0L73.5 17.5L45.5 35Z" fill="var(--gray200)" />
    </svg>
  );
};

const Bubble = styled.div(
  ({ y, shift }) => css`
    top: calc(${y}%);
    transform: translate(0, -${100 - shift}%);
    ${tw`p-4 rounded-lg w-72 absolute z-10`}
  `
);

const Annotation = styled.div(
  ({ x, y, left }) => css`
    content: '';
    // center dot
    left: calc(${x}%);
    top: calc(${y}%);
    transform: translate(-50%, -50%);
    ${tw`w-4 h-4 block rounded-full absolute border-3 border-primary bg-white bg-opacity-50`}

    &:after {
      // center line
      content: '';
      /* left: calc(100% + 1.5px); */
      left: ${left && `calc(100% + 1.5px);`};
      right: ${!left && `calc(100% + 1.5px);`};
      top: 50%;
      transform: translate(0%, -50%);
      width: 16rem;
      ${tw`absolute border-solid border-t-3 border-primary`}
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
