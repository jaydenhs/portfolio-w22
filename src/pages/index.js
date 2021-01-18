import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
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

      <h2 className="mb-5">Work</h2>
      <MainProjectPreviewWrapper>
        {mainProjects.map(({ node }, i) => (
          <MainProjectPreview project={node} key={i} />
        ))}
      </MainProjectPreviewWrapper>

      <AdditionalProjectPreviewWrapper>
        {additionalProjects.map(({ node }, i) => (
          <AdditionalProjectPreview project={node} key={i} />
        ))}
      </AdditionalProjectPreviewWrapper>
    </Layout>
  );
};

const MainProjectPreviewWrapper = styled.div.attrs({
  className: 'space-y-4 mb-16',
})``;

const AdditionalProjectPreviewWrapper = styled.div`
  ${tw`flex space-x-6`}
`;

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
            preview {
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
            rank
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexPage;
