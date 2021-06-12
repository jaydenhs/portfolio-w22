import React from 'react';
import Layout from '@components/layout';
import Scene from '@components/3d-room';
import ClientOnly from '@utils/client-only';

const About = () => {
  return (
    <Layout title="About">
      <h1 className="mb-1.5">TEST About Me</h1>
      <p className="text-xl mb-8">
        Welcome to my room — hover over any of the glowing dots to learn more
        about me!
      </p>
      <Scene />
    </Layout>
  );
};

export default About;
