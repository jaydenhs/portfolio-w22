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
        <RoomObject
          src={'diploma.svg'}
          svg={true}
          tooltip={true}
          width={10}
          left={8.647}
          top={32.9}
        >
          I am part of University of Waterloo's Systems Design Engineering Class
          of 2024 🔧 - ninety-six brilliant, innovative students who inspire me
          to do my best everyday! 🎉
        </RoomObject>
        {/* <RoomObject src="bed.png" width={36.38} left={27.12} top={27.82} /> */}
        {/* <RoomObject src="bed.png" width={12.59} left={28.64} top={19.38} /> */}

        <RoomObject
          src="sushi.svg"
          tooltip={true}
          width={4.41}
          left={34.23}
          top={20.99}
        >
          <Tooltip_Img src="sushi_tooltip.jpg" />
          Whether it be landscape 🍃, digital manipulation 💻, or fine art 🎨,
          photography has always been one of my favourite methods of artistic
          expression! 📷
        </RoomObject>
        <RoomObject
          src="sushi.svg"
          tooltip={true}
          width={10.77}
          left={65.1}
          top={21.41}
        >
          <Tooltip_Img src="sushi_tooltip.jpg" />I have always loved this final
          panel from Calvin and Hobbes 📚 - ever since I read it as a child,
          I've tried to apply this same curiosity to explore myself, my work,
          and the world around me! 🌎
        </RoomObject>

        <RoomObject
          src="sushi.svg"
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
