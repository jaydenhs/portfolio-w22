import React, { useState, useRef } from 'react';
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

let num = 1;

const Hero = () => {
  const slideRef = useRef(null);
  const [key, setKey] = useState(0);

  function transition() {
    //only transition every other slide
    num % 2 === 0 && slideRef.current.goNext();
    num++;
  }

  return (
    <HeroWrapper>
      <div className="w-3/5">
        <h1>Hello! I'm Jayden, a</h1>
        <Typist
          avgTypingDelay={90}
          stdTypingDelay={10}
          key={key}
          //update key when typing is finished to restart loop
          onTypingDone={() => setKey(key + 1)}
          onLineTyped={() => transition()}
          className="text-primary mb-8"
        >
          {words.map((value, index) => {
            let length = value.length;
            return (
              <h1 key={index} className="inline">
                {value}
                <Typist.Backspace count={length} delay={500} />
              </h1>
            );
          })}
        </Typist>
        <p className="text-xl space-y-2">
          <div>
            Systems Design Engineering student at the University of Waterloo.
          </div>
          <div>
            Previously a Product Designer at Ontario Digital Service and a UX/UI
            Designer at TD Labs.
          </div>
        </p>
      </div>

      <SlideContainer>
        <Fade ref={slideRef} transitionDuration={500} arrows={false}>
          {images.map((value, index) => {
            return <StyledImage fileName={value} />;
          })}
        </Fade>
      </SlideContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 83vh;
  ${tw`flex items-center`}
`;

const StyledImage = styled(Image).attrs({
  className: 'h-96 object-cover',
  imgStyle: { objectFit: 'cover', objectPosition: '50% 50%' },
})`
  width: 30rem;
`;

const SlideContainer = styled.div`
  width: 30rem;
  opacity: 25%;
  ${tw`h-96 absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden`}
`;

export default Hero;
