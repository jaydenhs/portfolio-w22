import React from 'react';
import Layout from '@components/layout';
import Img from '@utils/local-img';
import RoomObject from '@components/room-object';
import styled from 'styled-components';
import tw from 'twin.macro';

// require("../../images/remine.svg"),

const About = () => {
  return (
    <Layout title="About">
      <h1 className="mb-1.5">About Me</h1>
      <p className="text-xl mb-8">
        Welcome to my room — hover over any of the glowing dots to learn more
        about me!
      </p>
      <div className="relative">
        <Img src={'walls.png'} />
        <RoomObject src="bed.png" width={36.38} left={27.12} top={27.82} />
        <RoomObject
          src="sushi.png"
          tooltip={true}
          width={7.76}
          left={29.35}
          top={63.14}
        >
          <Tooltip_Img src="sushi_tooltip.jpg" />
          Some of my most treasured memories revolve around food! 😋 So let me
          know if you know any good restaurants, especially for sushi! 🍣
        </RoomObject>
      </div>
      {/* <Img src={'bed.png'} /> */}
    </Layout>
  );
};

const Tooltip_Img = styled(Img).attrs({
  imgStyle: { objectFit: 'contain' },
})`
  max-height: 12rem;
  ${tw`mb-3 object-contain`}
`;

export default About;
