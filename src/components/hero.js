import React, { useState, useRef } from 'react';
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
  //   'product_designer.jpg',
  //   'photographer.jpg',
  //   'pianist.png',
  'acapella_enthusiast.jpg',
  //   'friend.jpg',
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
    <div className="h-screen">
      <Typist
        avgTypingDelay={90}
        stdTypingDelay={10}
        key={key}
        onTypingDone={() => setKey(key + 1)}
        onLineTyped={() => transition()}
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
      <div className="slide-container">
        <Fade ref={slideRef} transitionDuration={500}>
          {images.map((value, index) => {
            return (
              <div className="each-fade">
                <div className="image-container">
                  <Image fileName={value} />
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
