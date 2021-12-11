import React, { Suspense } from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";
import Layout from "@layout/layout";
import ProjectPreview from "@home/main-project-preview";
import Hero from "@home/hero";
import styled from "styled-components";

import Model from "@home/model";
import { Canvas, extend } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

const IndexPage = (props) => {
  const projects = props.data.main.edges;

  extend({})

  return (
    <Layout title="Portfolio">
      <div style={{ position: "relative", width: "100%", height: 500 }}>
        <Canvas camera={{ position: [0, 0, 300] }} height="500">
          <ambientLight intensity={0.7} />
          <OrbitControls />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Model />
          </Suspense>
        </Canvas>
      </div>

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
