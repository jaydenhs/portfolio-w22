import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
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

  // useEffect(() => {
  //   if (parser.pathname === '/' && linkRefs[0]) {
  //     // focusNavLink(linkRefs[0].current);
  //   } else if (location.pathname === '/about' && linkRefs[1]) {
  //     // focusNavLink(linkRefs[1].current);
  //   }
  // }, [location]);

  // const focusNavLink = el => {
  //   if (navIndicatorRef.current.style.left) {
  //     navIndicatorRef.current.classList.add(headerStyles.transition);
  //   } else {
  //     navIndicatorRef.current.classList.remove(headerStyles.transition);
  //   }

  //   navIndicatorRef.current.style.width = `${el.offsetWidth}px`;
  //   navIndicatorRef.current.style.left = `${el.offsetLeft}px`;
  //   navIndicatorRef.current.style.backgroundColor = el.getAttribute(
  //     'activeColor'
  //   );
  // };

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
      {/* <FocusIndicator /> */}
    </Wrapper>
  );
};

const Logo = () => (
  //resize to smaller logo at mobile
  <svg className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50%" cy="50%" r="50%" fill="var(--color-primary)" />
  </svg>
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
const Item = styled(GatsbyLink)(
  ({ match }) => css`
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
