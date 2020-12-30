import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import DarkToggle from './dark-toggle';

const links = [
  { text: 'Portfolio', url: '', colour: `var(--color-primary)` },
  { text: 'About', url: 'about', colour: '#fbc15e' },
  { text: 'Resume', url: 'resume', colour: '#000' },
];

const Header = () => {
  const url = window.location.href;
  var parser = document.createElement('a');
  parser.href = `${url}`;
  // const [atTop, setAtTop] = React.useState(parser.pathname === '/');

  return (
    <Wrapper>
      <Logo />
      <ItemWrapper>
        {links.map((link, index) => {
          let match = parser.pathname === `/${link.url}`;
          return (
            <Item
              to={`/${link.url}`}
              key={index}
              match={match}
              colour={link.colour}
            >
              {link.text}
            </Item>
          );
        })}
      </ItemWrapper>
      <DarkToggle />
    </Wrapper>
  );
};

const Logo = () => (
  <svg height="40" width="40">
    <circle cx="20" cy="20" r="20" fill="#4895ea" />
  </svg>
);

const Wrapper = styled.main.attrs({
  className: 'flex items-center my-4',
})``;

const ItemWrapper = styled.main.attrs({
  className: 'space-x-4 ml-auto mr-4 md:space-x-16 md:mr-16',
})``;

//import in Link as GatsbyLink, create styled-component based on that
const Item = styled(GatsbyLink).attrs({
  className: `callout text-xl no-underline text-gray-400 transition-all duration-300 pb-4`,
})`
  //if the current location matches the destination of the link, show that colour
  color: ${props => {
    return props.match ? props.colour : null;
  }};
  /* transition: 0.3s; */
  /* z-index: 1; */
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: -10%;
    width: 120%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: z 0.3s;
  }

  &:not(.is-active):hover:before {
    opacity: 1;
    bottom: -2.5px;
  }
`;

// TIL you cannot just export default const in the statement like you can for components
// https://stackoverflow.com/questions/36261225/why-is-export-default-const-invalid
export default Header;
