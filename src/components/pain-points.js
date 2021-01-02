import React from 'react';
import Image from '@utils/gatsby-image-local';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

var alternate = false;

const PainPoints = ({ data }) => {
  return (
    <>
      {data.map(({ image, title, quotes }, index) => {
        return (
          <div className="flex space-x-8 items-center" key={index}>
            {/* must wrap gatsby-image in div with set width because of flexbox */}
            <div className="w-1/4">
              <Image fileName={image} className="w-full drop-shadow" />
            </div>
            <div className="w-1/2">
              <h3 className="mb-7">{title}</h3>
              <div className="space-y-8">
                {quotes.map((node, index) => {
                  // console.log({ node });
                  alternate = !alternate;
                  return (
                    <SpeechBubble key={index}>
                      {node}
                      <SpeechBubbleArrow left={alternate} />
                    </SpeechBubble>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const SpeechBubble = styled.div`
  ${tw`border-4 border-solid border-primary p-4 relative rounded-2xl`}
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
      border-top: 27px solid var(--color-primary);
      bottom: -5px;
      content: '';
      position: absolute;
      left: ${left && '2px'};
      right: ${!left && '2px'};
    }
    &::after {
      border-left: ${!left && '21px solid transparent'};
      border-right: ${left && '21px solid transparent'};
      border-top: 21px solid #fff;
      bottom: 4px;
      content: '';
      position: absolute;
      left: ${left && '6px'};
      right: ${!left && '6px'};
    }
  `
);

export default PainPoints;
