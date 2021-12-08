import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "@utils/local-img";
import AutoLink from "@components/auto-link";
import { motion, AnimatePresence } from "framer-motion";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function MainProjectPreview({
  project: {
    frontmatter: { title, slug, company, role, thumbnail },
  },
}) {
  return (
    <ProjectCard to={`${slug}`}>
      <div className="overflow-hidden h-128">
        <motion.div transition={{ duration: 0 }} layoutId={title}>
          <GatsbyImage image={getImage(thumbnail)} />
        </motion.div>
      </div>
      <motion.div
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 3, ease: "easeInOut" }}
        className="px-11 py-6 flex justify-between w-full"
      >
        <div className="flex flex-col">
          <p>{role}</p>
          <h3>{company}</h3>
        </div>
        <p className="w-2/3">{title}</p>
      </motion.div>
    </ProjectCard>
  );
}

const ProjectCard = styled(AutoLink)`
  ${tw`w-full rounded-xl transition-all duration-500 transform no-underline flex flex-col overflow-hidden items-center max-h-screen bg-surface`}
  /* min-height: 36rem; */
  box-shadow: 0px 10px 15px 0px var(--boxShadow1);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px var(--boxShadow2);
  }
`;

const Details = styled.div`
  ${tw`flex flex-col z-10`}
`;
