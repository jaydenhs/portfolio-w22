import React from 'react';
import ReactTooltip from 'react-tooltip';
import Layout from '@components/layout';
import Img from '@utils/local-img';
import RoomObject from '@components/room-object';

const About = () => {
  return (
    <Layout title="About">
      <h1 className="mb-1.5">About Me!</h1>
      <p className="text-xl mb-6">
        Welcome to my room — hover over any of the glowing dots to learn more
        about me!
      </p>
      <RoomObject />
      <Img fileName={'walls.png'} />
      <Img fileName={'bed.png'} />
    </Layout>
  );
};

export default About;
