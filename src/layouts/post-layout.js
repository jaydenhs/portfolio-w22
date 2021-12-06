import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "@components/layout";
import Quote from "@components/quote";
import tw from "twin.macro";
import { motion } from "framer-motion";

import Image from "@utils/local-img";
import FullBleed from "@components/full-bleed-container";

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
//apply all classNames that are specific to content within the flow here
const components = {
  h1: (props) => (
    <>
      <h2 {...props} className="mt-12" /> <hr className="mb-2" />
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
      frontmatter: { title, thumbnail },
      body,
    },
  },
}) {
  return (
    <Layout title={title} maxWidth={false}>
      <Wrapper>
        <div
          className="full-bleed overflow-hidden mb-4"
          style={{ height: "75vh" }}
        >
          <motion.img
            layoutId={title}
            transition={{ duration: 0.9, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="w-full"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          />
        </div>

        <h1>{title}</h1>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
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
        thumbnail
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
