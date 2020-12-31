module.exports = {
  siteMetadata: {
    title: `Jayden Hsiao's Portfolio`,
    description: `Product designer and front-end engineer`,
    author: `Jayden Hsiao`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
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
