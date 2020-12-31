/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/header';
import Helmet from 'react-helmet';
import { siteMetadata } from '@root/gatsby-config';

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet
        title={`${title} | ${siteMetadata.title}`}
        htmlAttributes={{ lang: 'en' }}
      />
      <div style={{ maxWidth: 1180 }} className="mx-auto px-3 md:px-16">
        <Header title={title} />
        {/* <ClientOnly>
        </ClientOnly> */}
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
