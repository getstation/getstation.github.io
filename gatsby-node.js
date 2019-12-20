const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
        '@getstation/use-firebase-auth': path.resolve('./node_modules/@getstation/use-firebase-auth'),
        'apollo-client': path.resolve('./node_modules/apollo-client'),
        'react-apollo': path.resolve('./node_modules/react-apollo'),
        '@apollo/react-common': path.resolve('./node_modules/@apollo/react-common'),
        '@apollo/react-hooks': path.resolve('./node_modules/@apollo/react-hooks'),
      },
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({ fromPath: '/invite-a-colleague.html', toPath: '/invite-a-colleague' });
  createRedirect({
    fromPath: '/welcome/*',
    toPath: '/welcome',
    statusCode: 200,
  });
}

// Re-routing some url overriding gatsby pages way
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/welcome/)) {
    page.matchPath = "/welcome/*"
    // Update the page.
    createPage(page)
  }
}
