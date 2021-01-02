import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '@components/layout';

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
const components = {
  h1: props => <h2 {...props} className="text-3xl mt-5 mb-3" />,
  h2: props => <h3 {...props} className="text-2xl mb-2" />,
  h3: props => <h4 {...props} className="text-xl mb-1.5" />,
  p: props => <p {...props} className="leading-normal mb-2" />,
  table: props => <table {...props} className="my-2" />,
  thead: props => <thead {...props} className="uppercase" />,
  th: props => <th {...props} className="w-1/4 align-top text-gray-800" />,
  td: props => <td {...props} className="w-1/4 align-top text-gray-700" />,
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
    <Layout title={title}>
      <Wrapper>
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

  & > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`;
