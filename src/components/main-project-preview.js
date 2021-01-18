import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

export default function MainProjectPreview({
  project: {
    frontmatter: {
      title,
      slug,
      description,
      category,
      tags,
      preview: { publicURL },
    },
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
      <VideoWrapper>
        <video autoPlay="autoplay" loop="loop" muted playsInline>
          <source src={publicURL} type="video/webm" />
        </video>
      </VideoWrapper>
    </ProjectCard>
  );
}

const VideoWrapper = styled.div`
  ${tw`w-1/2 ml-4 z-10`}
`;

const ProjectCard = styled(GatsbyLink)`
  ${tw`px-11 py-6 w-full rounded-xl transition-all duration-500 transform no-underline flex items-center max-h-screen`}
  min-height: 36rem;
  box-shadow: 0px 10px 15px 0px #e0e0e0;
  background-color: var(--background);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px #d1d1d1;
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
    className="absolute bottom-0 left-0 w-full rounded-b-xl"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1110 57.1148V445.002C1110 453.838 1102.84 461.002 1094 461.002H16C7.16346 461.002 0 453.838 0 445.002V63.5932C87.3285 44.6899 191.891 42.6994 296.124 40.7152C364.629 39.4111 432.993 38.1097 496.228 32.0114C533.326 28.4336 570.516 23.9378 607.591 19.456C770.027 -0.180222 930.246 -19.5483 1070.75 39.7377C1083.9 45.287 1097 51.0827 1110 57.1148Z"
      fill="var(--primary)"
    />
  </svg>
);
