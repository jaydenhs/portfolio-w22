import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "@utils/local-img";
import AutoLink from "@components/auto-link";
import { motion, AnimatePresence } from "framer-motion";

export default function MainProjectPreview({
  project: {
    frontmatter: { title, slug, company, role },
  },
}) {
  return (
    <ProjectCard to={`${slug}`}>
      <AnimatePresence initial={false}>
        <motion.img
          // transition={{ duration: 0 }}
          layoutId={title}
          animate={{ y: 0 }}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        />
      </AnimatePresence>
      <div className="px-11 py-6 flex justify-between w-full">
        <div className="flex flex-col">
          <p>{role}</p>
          <h3>{company}</h3>
        </div>
        <p className="w-2/3">{title}</p>
      </div>
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

  &:nth-child(odd) .wave {
    //flip wave for odd project card
    ${tw`transform -scale-x-1`}
  }
`;

const Details = styled.div`
  ${tw`flex flex-col z-10`}
`;
