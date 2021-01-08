// import React from 'react';
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'ProximaNova', serif;
    /* font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    background: var(--background);
    color: var(--text);
  }

  h1, h2 {
    font-family:'Bookmania';
    font-weight: 700;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    /* letter-spacing: -0.07rem; */
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    /* letter-spacing: -0.03rem; */
  }

  p {
    line-height: 1.35;
    letter-spacing: -0.01rem;
  }

  .drop-shadow {
    filter: drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.1));
  }

  //select all non-gatsby-link a tags (since gatsby would start with / to be internal)
  a:not([href^="/"]) {
    /* color: var(--primary); */
    ${tw`text-primary`}
    /* text-decoration: none;
    text-shadow: 0px -2px 0 var(--background), 0px -1px 0 var(--background), 0px 0px 0 var(--background),
      2px -2px 0 var(--background), 2px -1px 0 var(--background), 2px 0px 0 var(--background), -2px -2px 0 var(--background),
      -2px -1px 0 var(--background), -2px 0px 0 var(--background), 1px -2px 0 var(--background), 1px -1px 0 var(--background),
      1px 0px 0 var(--background), -1px -2px 0 var(--background), -1px -1px 0 var(--background), -1px 0px 0 var(--background),
      0px -2px 0 var(--background), 0px -1px 0 var(--background), 0px 0px 0 var(--background);
    box-shadow: 0 -1px 0 0 var(--background) inset, 0 -2px 0 0 transparent inset;

    transition: all 0.3s ease-in;

    &:hover {
      transition: all 0.3s ease-out;
      box-shadow: 0 0px 0 0 var(--background) inset, 0 -2px 0 0 var(--primary) inset;
    }

    &::selection {
      color: var(--background);
      ${tw`bg-primary`}
      text-shadow: none;
    } */
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--gray100);
  }

  body::-webkit-scrollbar-track {
    background: var(--gray100);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--gray100);
  }
`;

export default GlobalStyles;
