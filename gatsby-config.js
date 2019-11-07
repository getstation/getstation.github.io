require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://getstation.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['AUTH0_DOMAIN', 'AUTH0_CLIENT_ID', 'GRAPHQL_URI'],
      },
    },
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'station-website',
        accessToken: `${process.env.API_KEY}`,
        shouldNormalizeImage: () => true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `${process.env.GTM_ID}`,
        includeInDevelopment: false,
        gtmAuth: `${process.env.GTM_AUTH}`,
        gtmPreview: `${process.env.GTM_PREVIEW}`,
      },
    },
    'gatsby-plugin-client-side-redirect',
  ],
};
