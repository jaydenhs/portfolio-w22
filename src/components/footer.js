import React from 'react';
import { siteMetadata } from '@root/gatsby-config';
import AutoLink from '@components/auto-link';

const Footer = () => {
  const social = siteMetadata.social;
  return (
    <footer className="flex flex-col items-center mt-16">
      <h3 className="mb-2">Like what you see?</h3>
      <p className="mb-3">Let's keep the conversation going!</p>
      <div className="flex space-x-6 mb-3">
        {Object.entries(social).map(([name, link], index) => {
          return (
            <AutoLink to={link} key={index} className="text-lg">
              {name}
            </AutoLink>
          );
        })}
      </div>
      <p className="text-gray-500 mb-1.5">
        Designed and developed with love 🖤💛 © Jayden Hsiao 2021
      </p>
      <p className="text-gray-300 mb-1">
        (love as in Figma, GatsbyJS, GraphQL, Markdown JSX, TailwindCSS,
        styled-components, and twin.macro)
      </p>
      <AutoLink
        href="https://jaydenhs.github.io/life-credits/"
        target="_blank"
        rel="noopener noreferrer"
      >
        view my life credits!
      </AutoLink>
    </footer>
  );
};

export default Footer;
