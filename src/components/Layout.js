/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import ClientOnly from '@utils/client-only';
import Header from '@components/header';
import { siteMetadata } from '@root/gatsby-config';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ maxWidth: 1180 }} className="mx-auto px-3 md:px-16">
        <ClientOnly>
          <Header siteTitle={siteMetadata.title} />
        </ClientOnly>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
