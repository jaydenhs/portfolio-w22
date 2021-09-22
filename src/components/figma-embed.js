import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const FigmaEmbed = ({ title, src, hideUI }) => {
  return (
    <FigmaIFrame
      allowfullscreen
      title={title}
      src={src + (hideUI ? '%26hide-ui%3D1' : '')}
    />
  );
};

const FigmaIFrame = styled.iframe`
  ${tw`w-full h-screen rounded-b-sm`}
`;

export default FigmaEmbed;
