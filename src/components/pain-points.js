import React from 'react';
import Image from '@utils/local-img';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';

var alternate = false;

const PainPoints = ({ data }) => {
  return (
    <div className="space-y-10 my-3">
      {data.map(({ image, title, quotes, result }, index) => {
        return (
          <div
            className="flex space-x-8 items-center mx-auto"
            style={{ maxWidth: '864px' }}
            key={index}
          >
            {/* must wrap gatsby-image in div with set width because of flexbox */}
            <div className="w-1/3">
              <Image src={image} className="w-full drop-shadow" />
            </div>
            <div className="reading-width">
              <h3 className="mb-4">{title}</h3>
              <div className="space-y-9">
                {quotes.map((node, index) => {
                  alternate = !alternate;
                  return (
                    <SpeechBubble key={index}>
                      {/* must use markdown renderer because we're mapping through an array instead of passing in children */}
                      <ReactMarkdown source={`"${node}"`} />
                      <SpeechBubbleArrow left={alternate} />
                    </SpeechBubble>
                  );
                })}
              </div>
            </div>
            <Arrow />
            <div className="w-1/4">
              <p>{result}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SpeechBubble = styled.div`
  ${tw`border-4 border-solid p-4 relative rounded-2xl border-primary-light`}
`;

const SpeechBubbleArrow = styled.div(
  ({ left }) => css`
    border-left: 21px solid transparent;
    bottom: -25px;
    position: absolute;
    left: ${left && '15px'};
    right: ${!left && '15px'};
    &::before {
      border-left: ${!left && '30px solid transparent'};
      border-right: ${left && '30px solid transparent'};
      border-top: 27px solid var(--primaryLight);
      bottom: -5px;
      content: '';
      position: absolute;
      left: ${left && '2px'};
      right: ${!left && '2px'};
    }
    &::after {
      border-left: ${!left && '21px solid transparent'};
      border-right: ${left && '21px solid transparent'};
      border-top: 21px solid var(--background);
      bottom: 4px;
      content: '';
      position: absolute;
      left: ${left && '6px'};
      right: ${!left && '6px'};
    }
  `
);

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

export default PainPoints;
