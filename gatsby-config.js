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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
