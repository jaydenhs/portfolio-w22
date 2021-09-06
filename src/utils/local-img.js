import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import GetExtension from '@utils/get-extension';

const Image = ({ src, caption, ...rest }) => {
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
      <figure className="flex flex-col items-center">
        <video autoPlay="autoplay" loop="loop" muted playsInline {...rest}>
          <source src={webm_src} type="video/webm" />
        </video>
        <caption className="mt-2 text-gray-400">{caption}</caption>
      </figure>
    );
  } else if (extension === 'webp') {
    const src = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .original.src;
    return <img src={src} {...rest} />;
  } else {
    const fluid = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .fluid;

    return (
      <figure className="flex flex-col items-center">
        {/* have to wrap gatsby-img in div or else it shrinks to 0x0px https://github.com/gatsbyjs/gatsby/issues/12818#issuecomment-477856069 */}
        <div className="w-full">
          <Img fluid={fluid} {...rest} />
        </div>
        <figcaption className="mt-2 text-gray-400">{caption}</figcaption>
      </figure>
    );
  }
};

export default Image;
