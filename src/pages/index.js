import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import MainProjectPreview from '@components/main-project-preview';
import styled from 'styled-components';

const IndexPage = (props) => {
  const mainProjects = props.data.main.edges;
  return (
    <Layout title="Portfolio">
      <h1 className="mb-5">Work</h1>

      <MainProjectPreviewWrapper>
        {mainProjects.map(({ node }, i) => (
          <MainProjectPreview project={node} key={i} />
        ))}
      </MainProjectPreviewWrapper>
    </Layout>
  );
};

const MainProjectPreviewWrapper = styled.div.attrs({
  className: 'space-y-4',
})``;

export const pageQuery = graphql`
  query {
    main: allMdx(
      sort: { fields: frontmatter___rank, order: ASC }
      filter: { frontmatter: { section: { eq: "Main" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            category
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
    additional: allMdx(
      filter: { frontmatter: { section: { eq: "Additional" } } }
    ) {
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

export default IndexPage;
