import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AutoLink from "@general/auto-link";
import { motion, useAnimation } from "framer-motion";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function ProjectPreview({
  project: {
    frontmatter: { title, slug, company, role, thumbnail },
  },
}) {
  const divAnimationControls = useAnimation();
  const divAnimationVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    unhover: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  return (
    <motion.div
      onHoverStart={() => {
        divAnimationControls.start(divAnimationVariants.hover);
      }}
      onHoverEnd={() => {
        divAnimationControls.start(divAnimationVariants.unhover);
      }}
    >
      <ProjectCard to={`${slug}`}>
        <div className="overflow-hidden h-128">
          <motion.div
            animate={divAnimationControls}
            transition={{ duration: 0 }}
            layoutId={title}
          >
            <GatsbyImage image={getImage(thumbnail)} />
          </motion.div>
        </div>
        <motion.div className="pt-5 flex items-center justify-between w-full">
          <div className="flex flex-col whitespace-nowrap mr-16">
            <p className="text-lg">{role}</p>
            <h3 className="text-3xl">{company}</h3>
          </div>
          <p className="w-1/2 text-lg">{title}</p>
        </motion.div>
      </ProjectCard>
    </motion.div>
  );
}

const ProjectCard = styled(AutoLink)`
  ${tw`w-full rounded-xl transition-all duration-500 transform no-underline flex flex-col overflow-hidden items-center max-h-screen bg-surface`}/* min-height: 36rem; */
  /* box-shadow: 0px 10px 15px 0px var(--boxShadow1);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px var(--boxShadow2);
  } */
`;

const Details = styled.div`
  ${tw`flex flex-col z-10`}
`;
