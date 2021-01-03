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

const Layout = ({ children, title, maxWidth }) => {
  return (
    <>
      <Helmet
        title={`${title} | ${siteMetadata.title}`}
        htmlAttributes={{ lang: 'en' }}
      />
      <div className="mx-auto px-5 pb-10">
        <div style={{ maxWidth: 960 }} className="mx-auto">
          <Header title={title} />
        </div>
        <main style={{ maxWidth: maxWidth == null && 960 }} className="mx-auto">
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
