import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Wireframe from '@undraw/wireframe.svg';

const HighlightedSection = ({ children }) => {
  return (
    <Wrapper>
      <div className="w-1/2">{children}</div>
      <BlobBackground>
        <img src={Wireframe} />
      </BlobBackground>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  ${tw`flex space-x-3 mx-auto my-3`}
`;

const BlobBackground = styled.div`
  border-radius: 63% 0% 0% 22% / 50% 10% 10% 50%;
  background-color: var(--color-secondary);
  ${tw`flex items-center w-1/2 p-4 pl-8`}
`;

export default HighlightedSection;
