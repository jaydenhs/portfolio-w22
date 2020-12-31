import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import Layout from '@components/layout';

const shortcodes = { Link }; // Provide common components here

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
      <h1>{title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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
