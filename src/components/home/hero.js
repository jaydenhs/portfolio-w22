import React, { useState, Suspense } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Typist from "react-typist";
import "react-slideshow-image/dist/styles.css";
import AutoLink from "@general/auto-link";

import Model from "@home/model";
import { Html, OrbitControls } from "@react-three/drei";
import {
  motion,
  MotionCanvas,
  LayoutOrthographicCamera,
} from "framer-motion/three";

var words = [
  "Design Technologist",
  "Yoga Enthusiast",
  "Pianist",
  "Photographer",
  "Friend",
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
            Incoming Design Technologist at{" "}
            <AutoLink to="http://shopify.dev/">Shopify</AutoLink>. Previously a
            Product Designer at{" "}
            <AutoLink to="https://structionsite.com/">StructionSite</AutoLink>,{" "}
            <AutoLink to="https://tdlab.io/">TD Bank</AutoLink>, and the{" "}
            <AutoLink to="https://www.ontario.ca/page/ontario-digital-service">
              Ontario Digital Service
            </AutoLink>
            .
          </div>
        </Details>
      </div>

      <motion.div layoutId={"about-room"} className="w-2/5 h-full bg-black">
        {/* <MotionCanvas style={{ height: 500, width: "100%" }}>
          <LayoutOrthographicCamera
            makeDefault // Registers it as the default camera system-wide (default=false)
            position={[4, 2, 4]}
            near={0.01}
            far={2000}
            zoom={75}
          />
          <color attach="background" args={["black"]} />
          <ambientLight intensity={0.7} />
          <OrbitControls />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Model />
          </Suspense>
        </MotionCanvas> */}
      </motion.div>
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
