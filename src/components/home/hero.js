import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Typist from 'react-typist';
import 'react-slideshow-image/dist/styles.css';
import AutoLink from '@general/auto-link';

var words = [
  'Design Technologist',
  'Yoga Enthusiast',
  'Pianist',
  'Photographer',
  'Friend'
];

var longest = words.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}).length;

let num;
let avgTypingDelay = 90;

const Hero = () => {
  const [key, setKey] = useState(0);

  return (
    <HeroWrapper>
      <div className="w-3/5 mt-16 relative z-20">
        <h1>Hello! I'm Jayden, a</h1>
        <TypistWrapper
          avgTypingDelay={avgTypingDelay}
          stdTypingDelay={10}
          key={key}
          //update key when typing is finished to restart loop
          onTypingDone={() => setKey(key + 1)}
          className="text-primary mb-8"
        >
          {words.map((value, index) => {
            let length = value.length;

            //balance delays so slideshow images all appear for an equal amount of time
            //non-variable number is the minimum delay (applied to the longest word)
            let delay =
              longest * avgTypingDelay + 100 - length * avgTypingDelay;

            return (
              <h1 key={index} className="inline">
                {value}
                <Typist.Backspace count={length} delay={delay} />
              </h1>
            );
          })}
        </TypistWrapper>
        <Details>
          <div>
            Systems Design Engineering student at the University of Waterloo.
          </div>
          <div>
            Incoming Design Technologist at <AutoLink to ="http://shopify.dev/">Shopify</AutoLink>. Previously a Product Designer at <AutoLink to="https://structionsite.com/">StructionSite</AutoLink>, <AutoLink to="https://tdlab.io/">TD Bank</AutoLink>, and <AutoLink to="https://www.ontario.ca/page/ontario-digital-service">the Ontario
            Digital Service</AutoLink>.
          </div>
        </Details>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 28rem;
  ${tw`flex items-center relative my-10`}
`;

const TypistWrapper = styled(Typist)`
  span {
    //make cursor larger
    ${tw`text-primary-light`}
    font-size: 3.2rem;
  }
`;

const Details = styled.p`
  text-shadow: 0px 0px 3px var(--background), 0px 0px 4px var(--background),
    0px 0px 5px var(--background);
  ${tw`text-xl space-y-2`}
`;

export default Hero;
