module.exports = {
  siteMetadata: {
    title: `Jayden Hsiao's Portfolio`,
    description: `Product designer and front-end engineer`,
    author: `Jayden Hsiao`,
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

    //local gatsby-image querying
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-mdx`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': '',
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
