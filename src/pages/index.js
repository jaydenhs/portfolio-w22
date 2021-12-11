import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";
import Layout from "@layout/layout";
import ProjectPreview from "@home/main-project-preview";
import Hero from "@home/hero";
import styled from "styled-components";

const IndexPage = (props) => {
  const projects = props.data.main.edges;
  return (
    <Layout title="Portfolio">
      <Hero />
      <ProjectPreviewWrapper>
        {projects.map(({ node }, i) => (
          <ProjectPreview project={node} key={i} />
        ))}
      </ProjectPreviewWrapper>
    </Layout>
  );
};

const ProjectPreviewWrapper = styled.div.attrs({
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
