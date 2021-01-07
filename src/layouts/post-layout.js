import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '@components/layout';
import tw from 'twin.macro';

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
//apply all classNames that are specific to content within the flow here
const components = {
  h1: (props) => (
    <>
      <h2 {...props} className="mt-7" /> <hr className="mb-2" />
    </>
  ),
  h2: (props) => <h3 {...props} className="mt-4 mb-0" />,
  h3: (props) => <h4 {...props} className="mb-0.5" />,
  p: (props) => <p {...props} />,
  table: (props) => <table {...props} className="my-1 text-left" />,
  thead: (props) => <thead {...props} className="uppercase" />,
  th: (props) => (
    <th {...props} className="w-1/4 align-top text-gray-800 pb-0.5" />
  ),
  td: (props) => <td {...props} className="align-top text-gray-700 pr-4" />,
};

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) {
  return (
    <Layout title={title} maxWidth={false}>
      <Wrapper>
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
    ${tw`text-4xl`}
  }

  h2 {
    ${tw`text-3xl`}
  }

  h3 {
    ${tw`text-2xl font-bold`}
  }

  h4 {
    ${tw`text-xl`}
  }

  p {
    ${tw`leading-relaxed`}
  }
`;
