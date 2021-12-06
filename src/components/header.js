import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Resume from "@static/resume.pdf";
import HeadRoom from "react-headroom";
import AutoLink from "@components/auto-link";

const links = [
  { text: "Portfolio", url: "/", colour: `var(--primary)` },
  { text: "About", url: "/about", colour: "var(--secondary)" },
  { text: "Resume", url: Resume, colour: "#000" },
];

const Header = ({ title }) => {
  return (
    <HeadRoom
      className="mx-auto z-50"
      style={{
        background: "var(--background)",
        zIndex: "999",
      }}
    >
      <Wrapper>
        <Logo />
        <ItemWrapper>
          {links.map(({ text, url, colour }, index) => {
            let match = title === text;
            return (
              <Item to={url} key={index} match={match} colour={colour}>
                {text}
              </Item>
            );
          })}
        </ItemWrapper>
        {/* <FocusIndicator /> */}
      </Wrapper>
    </HeadRoom>
  );
};

const Logo = () => (
  //resize to smaller logo at mobile
  <AutoLink to="/">
    <svg className="w-8 h-8 md:w-10 md:h-10">
      <circle cx="50%" cy="50%" r="50%" className="fill-current text-primary" />
    </svg>
  </AutoLink>
);

const Wrapper = styled.main`
  ${tw`flex items-center my-4 px-5 mx-auto`}
  max-width: 960px;
`;

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
    "space-x-4 ml-auto mr-4 md:space-x-12 md:mr-12 lg:space-x-16 md:mr-16",
})``;

//import in Link as AutoLink, create styled-component based on that
const Item = styled(AutoLink)(
  ({ match, colour }) => css`
    ${tw`text-xl no-underline transition-all pb-4 relative duration-300`}

    //if the current location matches the destination of the link, show that colour
    //else display default gray text
    ${match ? tw`text-primary` : tw`text-gray-500`}

    &:before {
      content: "";
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
