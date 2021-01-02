import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '@components/layout';

//move all headings down one hierarchy for simplicity writing mdx (less #'s)
const components = {
  h1: props => <h2 {...props} className="text-3xl mb-3" />,
  h2: props => <h3 {...props} className="text-2xl mb-2" />,
  h3: props => <h4 {...props} className="text-xl mb-1.5" />,
};

export default function PostLayout({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) {
  console.log({ body });
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
