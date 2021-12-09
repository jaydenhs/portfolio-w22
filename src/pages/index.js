import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";
import Layout from "@components/layout";
import MainProjectPreview from "@components/main-project-preview";
import Hero from "@components/hero";
import styled from "styled-components";

const IndexPage = (props) => {
  const mainProjects = props.data.main.edges;
  return (
    <Layout title="Portfolio">
      <Hero />
      <MainProjectPreviewWrapper>
        {mainProjects.map(({ node }, i) => (
          <MainProjectPreview project={node} key={i} />
        ))}
      </MainProjectPreviewWrapper>
    </Layout>
  );
};

const MainProjectPreviewWrapper = styled.div.attrs({
  className: "space-y-20 mb-16",
})``;

export const pageQuery = graphql`
  query {
    main: allMdx(
      sort: { fields: frontmatter___rank, order: ASC }
      filter: { frontmatter: { hidden: { ne: true }, section: { eq: "Main" } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            company
            role
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
