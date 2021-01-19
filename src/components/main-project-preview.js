import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';

export default function MainProjectPreview({
  project: {
    frontmatter: { title, slug, description, category, tags, thumbnail },
  },
}) {
  return (
    <ProjectCard to={`${slug}`}>
      <Wave />
      <Details>
        <h3 className="mb-1.5">{title}</h3>
        <p className="uppercase text-md mb-2.5">
          <b>{category}</b> <span className="px-0.5">•</span> {tags}
        </p>
        <p>{description}</p>
      </Details>
      <div className="mx-2" />
      <VideoWrapper>
        <Image src={thumbnail} />
      </VideoWrapper>
    </ProjectCard>
  );
}

const VideoWrapper = styled.div`
  ${tw`w-1/2 z-10`}
`;

const ProjectCard = styled(GatsbyLink)`
  ${tw`px-11 py-6 w-full rounded-xl transition-all duration-500 transform no-underline flex even:flex-row-reverse items-center max-h-screen bg-surface`}
  min-height: 36rem;
  box-shadow: 0px 10px 15px 0px var(--boxShadow1);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px var(--boxShadow2);
  }

  &:nth-child(even) .wave {
    //flip wave for even project card
    ${tw`transform -scale-x-1`}
  }
`;

const Details = styled.div`
  ${tw`flex flex-col w-1/2 z-10`}
`;

const Wave = () => (
  <svg
    height="250"
    viewBox="0 0 1110 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full rounded-b-xl wave"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1110 57.1148V445.002C1110 453.838 1102.84 461.002 1094 461.002H16C7.16346 461.002 0 453.838 0 445.002V63.5932C87.3285 44.6899 191.891 42.6994 296.124 40.7152C364.629 39.4111 432.993 38.1097 496.228 32.0114C533.326 28.4336 570.516 23.9378 607.591 19.456C770.027 -0.180222 930.246 -19.5483 1070.75 39.7377C1083.9 45.287 1097 51.0827 1110 57.1148Z"
      fill="hsla(var(--primaryHS) var(--normal), 85%)"
    />
  </svg>
);
