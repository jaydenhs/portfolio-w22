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
    // Styling
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",

    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
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

    // Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      },
    },

    // Aliases
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@root": "",
          "@src": "src",
          "@components": "src/components",
          "@about": "src/components/about",
          "@general": "src/components/general",
          "@home": "src/components/home",
          "@layout": "src/components/layout",
          "@post": "src/components/post",
          "@pages": "src/pages",
          "@utils": "src/utils",
          "@posts": "src/posts",
          "@static": "static",
          "@undraw": "static/undraw",

        },
        extensions: ["js"],
      },
    },
  ],
};
