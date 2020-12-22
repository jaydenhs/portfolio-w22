import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <div>
      <Header />
      <h1>Awesome MDX Blog</h1>

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
    </div>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
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
