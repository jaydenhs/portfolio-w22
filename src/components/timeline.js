import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Timeline = ({ start, markers }) => {
  return (
    <div className="my-4 mx-24">
      <TimelineLine />
      <TimelineItems>
        {markers.map((node, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineContent>{node}</TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineItems>
    </div>
  );
};

const TimelineLine = styled.div`
  ${tw`h-1 bg-gray-200 w-full rounded-md`}
`;

const TimelineItems = styled.div`
  ${tw`-m-3 mb-0 flex justify-between`}
`;

const TimelineItem = styled.div`
  ${tw`w-5`}
  &:before {
    content: '';
    ${tw`w-5 h-5 block rounded-full bg-primary`}
  }
`;

const TimelineContent = styled.div`
  transform: translateX(calc(-50% + 10px));
  background-color: rgba(var(--color-primary), 0.2);
  ${tw`mt-3 rounded px-2 py-3 w-40 text-center`}
`;

export default Timeline;
