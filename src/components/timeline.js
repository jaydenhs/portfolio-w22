import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import adjustLum from '@utils/adjust-lum';

const Timeline = ({ markers }) => {
  const last_elem = markers.length - 1;
  return (
    <div className="mt-8 mb-4">
      <div className="flex">
        <EndText className="text-right pr-5">{markers[0]}</EndText>
        <div className="w-full">
          <TimelineLine />
          <TimelineItems>
            {markers.map((node, index) => {
              let first_or_last = index === 0 || index === last_elem;
              return (
                <TimelineItem key={index} first_or_last={first_or_last}>
                  {!first_or_last && <TimelineContent>{node}</TimelineContent>}
                </TimelineItem>
              );
            })}
          </TimelineItems>
        </div>
        <EndText className="pl-10">{markers[last_elem]}</EndText>
      </div>
    </div>
  );
};

const EndText = styled.p`
  transform: translateY(calc(-20%));
  ${tw`font-bold`}
`;

const TimelineLine = styled.div`
  ${tw`h-1 bg-gray-200 w-full rounded-md`}
`;

const TimelineItems = styled.div`
  ${tw`-mt-3 flex justify-between w-full`}
`;

const TimelineItem = styled.div(
  ({ first_or_last }) => css`
    ${first_or_last ? tw`w-0` : tw`w-40`}
    transform: translateX(calc(50%));
    &:before {
      content: '';
      ${tw`w-5 h-5 block rounded-full bg-primary`}
    }
  `
);

const TimelineContent = styled.div`
  transform: translateX(calc(-50% + 10px));
  /* background-color: ${adjustSat(`${adjustLum('#4895ea', 150)}`, -20)}; */
  background-color: ${adjustLum('#4895ea', 20)};
  /* background-color: lighten(#0000ff, 50%); */
  min-width: 160px;
  ${tw`mt-3 rounded px-3 py-3 text-center`}

  &:before {
    content: '';
    background-color: rgba(var(--color-primary), 0.2);
    /* background-color: lighten(rgb(var(--color-primary)), 50%); */
    transform: rotate(-45deg) translateX(-50%);
    margin-left: -0.11rem;
    ${tw`w-2.5 h-2.5 block absolute -top-2 left-1/2`}
  }
`;

export default Timeline;
