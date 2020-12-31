import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ fileName, alt, style, className }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 100) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid;

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} className={className} />
    </figure>
  );
};

export default Image;
