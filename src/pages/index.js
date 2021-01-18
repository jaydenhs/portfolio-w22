import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import MainProjectPreview from '@components/main-project-preview';
import AdditionalProjectPreview from '@components/additional-project-preview';
import Hero from '@components/hero';
import styled from 'styled-components';

const IndexPage = (props) => {
  const mainProjects = props.data.main.edges;
  const additionalProjects = props.data.additional.edges;
  return (
    <Layout title="Portfolio">
      <Hero />

      <h1 className="mb-5">Work</h1>
      <MainProjectPreviewWrapper>
        {mainProjects.map(({ node }, i) => (
          <MainProjectPreview project={node} key={i} />
        ))}
      </MainProjectPreviewWrapper>
      <MainProjectPreviewWrapper>
        {additionalProjects.map(({ node }, i) => (
          <AdditionalProjectPreview project={node} key={i} />
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
      filter: { frontmatter: { rank: { ne: "0" }, section: { eq: "Main" } } }
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
      sort: { fields: frontmatter___rank, order: ASC }
      filter: {
        frontmatter: { rank: { ne: "0" }, section: { eq: "Additional" } }
      }
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
  }
`;

export default IndexPage;
