import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import GetExtension from '@utils/get-extension';

const Image = ({ src, ...rest }) => {
  console.log({ ...rest });
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
    var svg_src = require(`@static/images/about/${src}`);
    return <img src={svg_src} {...rest} />;
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
