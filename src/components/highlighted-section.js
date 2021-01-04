import React from 'react';
import Undraw from 'react-undraw';
import styled from 'styled-components';
import tw from 'twin.macro';

const HighlightedSection = ({ children }) => {
  //   const color = window
  //     .getComputedStyle(document.documentElement)
  //     .getPropertyValue('--color-primary');
  //   console.log({ color });
  return (
    <Wrapper>
      <div className="w-1/2">{children}</div>
      <BlobBackground>
        <Undraw name="wireframe" primaryColor="rgb(var(--color-primary))" />
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
  background-color: rgba(var(--color-primary), 0.15);
  ${tw`flex items-center w-1/2 p-4 pl-8`}
`;

export default HighlightedSection;
