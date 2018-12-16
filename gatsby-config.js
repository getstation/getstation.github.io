require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://getstation.com/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Get Station',
        short_name: 'Station',
        start_url: '/',
        background_color: '#2F70CC',
        theme_color: '#2F70CC',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'station-website',
        accessToken: `${process.env.API_KEY}`,
        lang: '*',
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
    },
  ],
};
