import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const Note = ({ children, left }) => {
  return (
    // move to selected column
    <Container left={left}>
      {/* add padding when on right side */}
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div.attrs(({ left }) => ({
  className: left ? 'left-col' : 'right-col',
}))`
  ${tw`w-0 h-0 hidden lg:block relative`}
`;

const Wrapper = styled.div(
  ({ left }) => css`
    ${tw`pl-4 py-1 rounded border-l-4 border-primary absolute text-gray-500`}
    ${left ? tw`pr-0` : tw`pr-6`}

    p {
      margin-bottom: 0;
    }
  `
);

export default Note;
