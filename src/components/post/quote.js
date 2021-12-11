import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Quote = ({ children }) => {
  return (
    <div className="my-6 relative block">
      <QuoteText>{children}</QuoteText>
    </div>
  );
};

const QuoteText = styled.blockquote`
  ${tw`text-primary text-2xl leading-relaxed mb-8 pt-28`}

  &:before {
    content: '';
    border-radius: 50%;
    ${tw`absolute border-l-4 border-solid border-primary-light h-full -left-16 top-0 w-1/5`}
  }

  &:after {
    content: '❞';
    ${tw`rounded-full text-background bg-primary opacity-60 text-6xl w-24 h-24 text-center absolute left-1/2 transform -translate-x-1/2 top-0 pt-8`}
  }
`;

export default Quote;
