import React from 'react';
import { siteMetadata } from '@root/gatsby-config';

const Footer = () => {
  const social = siteMetadata.social;
  console.log({ social });
  return (
    <footer className="flex flex-col items-center mt-16">
      <h3 className="mb-2">Like what you see?</h3>
      <p className="mb-3">Let's keep the conversation going!</p>
      <div className="flex space-x-4 mb-3">
        {Object.entries(social).map(([social, link], index) => {
          return (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {social}
            </a>
          );
        })}
      </div>
      <p className="text-gray-500 mb-1">
        Designed and developed with love 🖤💛 © Jayden Hsiao 2021
      </p>
      <a
        href="https://jaydenhs.github.io/life-credits/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-light"
      >
        view my life credits!
      </a>
    </footer>
  );
};

export default Footer;
