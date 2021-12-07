// require('dotenv').config({
//   path: `.env.local`,
// });

module.exports = {
  siteMetadata: {
    title: `Jayden Hsiao's Portfolio`,
    description: `Product designer and front-end engineer`,
    author: `Jayden Hsiao`,
    social: {
      email: `mailto:j3hsiao@uwaterloo.ca`,
      github: `https://github.com/jaydenhs`,
      linkedin: `https://www.linkedin.com/in/jaydenh`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    //mdx post generation
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },

    //local gatsby-image querying
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1440,
              withWebp: true,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@root": "",
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@utils": "src/utils",
          "@posts": "src/posts",
          "@static": "static",
          "@undraw": "static/undraw",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        // password: process.env.PASSWORD, // delete or `undefined` to disable password protection
        password: undefined,
        // password: 'test', // delete or `undefined` to disable password protection
        pagePaths: ["/structionsite"],
      },
    },
  ],
};
