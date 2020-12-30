import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <h1>Projects</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: { frontmatter: { section: { eq: "Main" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;
