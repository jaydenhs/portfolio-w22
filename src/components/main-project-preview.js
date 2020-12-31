import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export default function MainProjectPreview({
  project: {
    frontmatter: { title, slug, description, category, tags },
  },
}) {
  console.log({ description });
  return (
    <ProjectCard to={`${slug}`}>
      <Details>
        <h2>{title}</h2>
        <p className="uppercase">
          {category} <b>·</b> {tags}
        </p>
        <p>{description}</p>
      </Details>
    </ProjectCard>
  );
}

const ProjectCard = styled(GatsbyLink)`
  ${tw`p-11 w-full block rounded-xl transition-all duration-500 transform no-underline`}
  box-shadow: 0px 10px 15px 0px #e0e0e0;

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px #d1d1d1;
  }
`;

const Details = styled.div`
  ${tw`flex flex-col w-1/2`}
`;
