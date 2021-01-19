import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import GetExtension from '@utils/get-extension';

const Image = ({ src, ...rest }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 100) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
          original {
            src
          }
        }
      }
    }
  `);

  var extension = GetExtension(src);

  if (extension === 'svg') {
    let svg_src = require(`@static/images/about/${src}`);
    return <img src={svg_src} {...rest} />;
  } else if (extension === 'webm') {
    let webm_src = require(`@posts/${src}`);
    return (
      <video autoPlay="autoplay" loop="loop" muted playsInline {...rest}>
        <source src={webm_src} type="video/webm" />
      </video>
    );
  } else if (extension === 'webp') {
    const src = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .original.src;
    return <img src={src} {...rest} />;
  } else {
    const fluid = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .fluid;

    return (
      <figure>
        <Img fluid={fluid} {...rest} />
      </figure>
    );
  }
};

export default Image;
