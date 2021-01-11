import React from 'react';
import ReactTooltip from 'react-tooltip';
import Layout from '@components/layout';
import Img from '@utils/local-img';
import RoomObject from '@components/room-object';

const About = () => {
  return (
    <Layout title="About">
      <h1 className="mb-1.5">About Me!</h1>
      <p className="text-xl mb-8">
        Welcome to my room — hover over any of the glowing dots to learn more
        about me!
      </p>
      <div className="relative w-full">
        <Img src={'walls.png'} />
        <RoomObject src="bed.png" width={36.38} left={27.12} top={27.82} />
      </div>
      {/* <Img src={'bed.png'} /> */}
    </Layout>
  );
};

export default About;
