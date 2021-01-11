import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Typist from 'react-typist';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from '@utils/local-img';

var words = [
  'Product Designer',
  'Photographer',
  'Pianist',
  'Acapella Enthusiast',
  'Friend',
];

var images = [
  'product_designer.jpg',
  'photographer.jpg',
  'pianist.png',
  'acapella_enthusiast.jpg',
  'friend.jpg',
];

var longest = words.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}).length;

let num;
let avgTypingDelay = 90;

const Hero = () => {
  const slideRef = useRef();
  const [key, setKey] = useState(0);

  useEffect(() => {
    num = 1;
  });

  function transition() {
    //only transition every other slide and if slideRef.current exists
    num % 2 === 0 &&
      slideRef.current !== null &&
      slideRef.current.goNext() &&
      (num = 1);
    num++;
  }

  return (
    <HeroWrapper>
      <div className="w-3/5 mt-16 relative z-50">
        <h1>Hello! I'm Jayden, a</h1>
        <TypistWrapper
          avgTypingDelay={avgTypingDelay}
          stdTypingDelay={10}
          key={key}
          //update key when typing is finished to restart loop
          onTypingDone={() => setKey(key + 1)}
          onLineTyped={() => transition()}
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
            Previously a Product Designer at Ontario Digital Service and a UX/UI
            Designer at TD Labs.
          </div>
        </Details>
      </div>

      <SlideContainer>
        <Fade ref={slideRef} transitionDuration={500} arrows={false}>
          {images.map((value, index) => {
            return <StyledImage src={value} key={index} />;
          })}
        </Fade>
      </SlideContainer>
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

const SlideContainer = styled.div`
  width: 30rem;
  height: 28rem;
  opacity: var(--translucent);
  ${tw`absolute top-1/2 right-0 transform -translate-y-1/2 overflow-hidden`}
`;

const StyledImage = styled(Image).attrs({
  // className: 'object-cover',
  imgStyle: { objectFit: 'cover', objectPosition: '50% 50%' },
})`
  width: 30rem;
  height: 28rem;
`;

export default Hero;
