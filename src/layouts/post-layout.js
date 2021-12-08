import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "@components/layout";
import Quote from "@components/quote";
import tw from "twin.macro";
import { motion } from "framer-motion";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Image from "@utils/local-img";
import FullBleed from "@components/full-bleed-container";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const ease = [0.6, 0.01, -0.05, 0.9];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
      staggerChildren: 0.5,
    },
  },
};

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
//apply all classNames that are specific to content within the flow here
const components = {
  h1: (props) => (
    <>
      <h2 {...props} className="mt-12" />
      <hr className="mb-2" />
    </>
  ),
  h2: (props) => <h3 {...props} className="mt-6 mb-0" />,
  h3: (props) => <h4 {...props} className="mb-0.5" />,
  p: (props) => <p {...props} />,
  table: (props) => <table {...props} className="my-1 text-left" />,
  thead: (props) => <thead {...props} className="uppercase" />,
  th: (props) => (
    <th {...props} className="w-1/4 align-top text-gray-800 pb-0.5" />
  ),
  td: (props) => (
    <td {...props} className="align-top text-gray-700 pr-4 pb-1" />
  ),
  blockquote: (props) => <Quote {...props} />,
  ol: (props) => <ol {...props} className="list-decimal pl-8 space-y-1" />,
};

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: { title, thumbnail, embeddedImagesLocal },
      body,
    },
  },
}) {
  return (
    <Layout title={title} maxWidth={false}>
      <div
        className="overflow-hidden mb-8 flex items-center"
        style={{ height: "70vh" }}
      >
        <motion.div layoutId={title} transition={{ duration: 1, ease: ease }}>
          <GatsbyImage image={getImage(thumbnail)} />
        </motion.div>
      </div>
      <motion.div variants={container} initial="hidden" animate="show">
        <Wrapper>
          <h1>{title}</h1>
          <MDXProvider components={components}>
            <MDXRenderer localImages={embeddedImagesLocal}>{body}</MDXRenderer>
          </MDXProvider>
        </Wrapper>
      </motion.div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  ${tw`gap-x-0 lg:gap-x-8 gap-y-2`}

  & > * {
    grid-column: 2;
  }

  .reading-width {
    width: min(65ch, 100%);
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }

  .left-col {
    width: 100%;
    grid-column: 1 / 2;
  }

  .right-col {
    width: 100%;
    grid-column: -2 / -1;
  }

  //provide base styles (applied across both MDX and rendered components)

  h1 {
    ${tw`text-4xl mb-3`}
  }

  h2 {
    ${tw`text-3xl`}
  }

  p {
    ${tw`leading-relaxed`}
  }
`;
