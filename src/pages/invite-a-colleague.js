import React from 'react';
import JSRedirection from '../components/organims/JSRedirection';

// todo: move me to Prismic
const VIRAL_LOOPS = 'https://pages.viral-loops.com/In-app-refer-2-9467';

const InvitePage = () => {
  return (
    <JSRedirection
      redirectionURL={VIRAL_LOOPS}
      redirectionTitle="invitations"
    />
  );
};

export default InvitePage;
