import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import DarkToggle from '@components/dark-toggle';
import Resume from '@static/resume.pdf';

const links = [
  { text: 'Portfolio', url: '', colour: `var(--primary)` },
  { text: 'About', url: 'about', colour: 'var(--secondary)' },
  { text: 'Resume', url: 'resume', colour: '#000' },
];

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Logo />
      <ItemWrapper>
        {links.map(({ text, url, colour }, index) => {
          let match = title === text;
          let isResume = url === 'resume';

          return (
            <Item key={index} match={match} colour={colour}>
              {isResume ? (
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              ) : (
                <GatsbyLink to={`/${url}`}>{text}</GatsbyLink>
              )}
            </Item>
          );
        })}
      </ItemWrapper>

      <DarkToggle />
      {/* <FocusIndicator /> */}
    </Wrapper>
  );
};

const Logo = () => (
  //resize to smaller logo at mobile
  <GatsbyLink to="/">
    <svg className="w-8 h-8 md:w-10 md:h-10">
      <circle cx="50%" cy="50%" r="50%" className="fill-current text-primary" />
    </svg>
  </GatsbyLink>
);

const Wrapper = styled.main.attrs({
  className: 'flex items-center my-4',
})``;

// const FocusIndicator = styled.span`
//   position: absolute;
//   left: 0;
//   bottom: 0px;
//   height: 5px;
//   z-index: 1;
//   border-radius: 8px 8px 0 0;

//   &.transition {
//     transition: 0.4s;
//   }
// `;

const ItemWrapper = styled.main.attrs({
  className:
    'space-x-4 ml-auto mr-4 md:space-x-12 md:mr-12 lg:space-x-16 md:mr-16',
})``;

//import in Link as GatsbyLink, create styled-component based on that
const Item = styled.span(
  ({ match, colour }) => css`
    ${tw`text-xl no-underline transition-all pb-4 relative duration-300`}

    //if the current location matches the destination of the link, show that colour
    //else display default gray text
    ${match ? tw`text-primary` : tw`text-gray-500`}

    &:before {
      content: '';
      left: -10%;
      width: 120%;
      ${tw`h-1 bottom-0 absolute rounded-t-xl duration-300`}
      ${match ? tw`bg-primary opacity-100` : tw`bg-gray-300 opacity-0`}
    }

    &:hover:before {
      ${tw`opacity-100`}
    }
  `
);

// TIL you cannot just export default const in the statement like you can for components
// https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid
export default Header;
