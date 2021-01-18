import React from 'react';
import Image from '@utils/local-img';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const Process = ({ data }) => {
  return (
    <Wrapper>
      {data.map(({ title, description, image, style }, index) => {
        console.log({ style });
        return (
          <>
            <div className="flex items-center even:flex-row-reverse relative">
              <Arrow index={index} nodes={data.length} />
              <div className="w-2/3">
                <Image src={image} style={style} />
              </div>
              {/* can't use space-x-# class because the flex direction reverses (margin on wrong side) */}
              <div className="mx-2"></div>
              <div className="w-1/3">
                <h3 className="mb-2">{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`space-y-8 mx-auto mb-4`}
  max-width: 880px;
`;

const Arrow = ({ index, nodes }) => {
  return (
    <ArrowWrapper
      even={index % 2 == 1}
      last={index === nodes - 1}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136.11 216.25"
    >
      <g>
        <g>
          <path
            d="M130.46,8.25C62.1,55.08,43.78,108.79,32.35,166.81"
            // style="fill:none; stroke:#b0b0b0; stroke-miterlimit:10; stroke-width:20px"
            fill="none"
            stroke="#b0b0b0"
            strokeMiterlimit="10"
            strokeWidth="20px"
          />
          <polygon
            points="0 150.51 23.46 216.25 68.67 163.07 0 150.51"
            fill="#b0b0b0"
          />
        </g>
      </g>
    </ArrowWrapper>
  );
};

const ArrowWrapper = styled.svg(
  ({ even, last }) => css`
    ${last && tw`hidden`}
    ${tw`absolute w-16 z-10`}
    ${even ? tw`right-1/2` : tw`transform -scale-x-1`}
    bottom: ${even ? '-5%' : '-15%'};
    left: ${!even && '65%'};
  `
);

export default Process;
