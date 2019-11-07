exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};


exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  //
  createRedirect({ fromPath: '/invite-a-colleague.html', toPath: '/invite-a-colleague' });
}
