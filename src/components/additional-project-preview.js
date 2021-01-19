import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';

export default function MainProjectPreview({
  project: {
    frontmatter: { title, slug, description, category, tags, rank, thumbnail },
  },
}) {
  return (
    <Wrapper>
      {rank === '1' && <h2 className="mb-6">Additional Projects</h2>}
      <ProjectCard to={`${slug}`}>
        <div className="w-full">
          <Image src={thumbnail} className="rounded-t-xl" />
        </div>
        <Details>
          <h3 className="mb-1.5">{title}</h3>
          <p className="uppercase text-md mb-2.5">
            <b>{category}</b> <span className="px-0.5">•</span> {tags}
          </p>
          <p>{description}</p>
        </Details>
      </ProjectCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 49%; */
`;

const ProjectCard = styled(GatsbyLink)`
  ${tw`rounded-xl transition-all duration-500 transform no-underline flex flex-col bg-surface`}
  color: var(--text) !important;
  box-shadow: 0px 10px 15px 0px var(--boxShadow1);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px var(--boxShadow2);
  }
`;

const Details = styled.div`
  ${tw`flex flex-col w-full z-10 p-8`}
`;
