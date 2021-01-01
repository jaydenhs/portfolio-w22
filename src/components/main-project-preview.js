import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/gatsby-image-local.js';

export default function MainProjectPreview({
  project: {
    frontmatter: {
      title,
      slug,
      description,
      category,
      tags,
      thumbnail: { publicURL },
    },
  },
}) {
  // console.log(`${thumbnail}`);
  return (
    <ProjectCard to={`${slug}`}>
      <Details>
        <h2>{title}</h2>
        <p className="uppercase">
          {category} <b>·</b> {tags}
        </p>
        <p>{description}</p>
      </Details>
      <div className="w-1/2 ml-4">
        <img src={publicURL} />
        {/* <Image
          fileName="llama.webp"
          className="w-100"
          alt="Illustration of a person reading a book"
        /> */}
        {/* <img src={Llama} /> */}
      </div>
    </ProjectCard>
  );
}

const ProjectCard = styled(GatsbyLink)`
  ${tw`p-11 w-full block rounded-xl transition-all duration-500 transform no-underline flex items-center`}
  box-shadow: 0px 10px 15px 0px #e0e0e0;

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px #d1d1d1;
  }
`;

const Details = styled.div`
  ${tw`flex flex-col w-1/2`}
`;
