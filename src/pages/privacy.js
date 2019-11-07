import React from 'react';
import JSRedirection from '../components/organims/JSRedirection';

// todo: move me to Prismic
const PRIVACY_POLICIES_URL = 'https://faq.getstation.com/en/articles/1211678-what-are-your-privacy-policies';

const PrivacyPage = () => {
  return (    
    <JSRedirection
      redirectionURL={PRIVACY_POLICIES_URL}
      redirectionTitle="privacy policies"
    />
  );
};
export default PrivacyPage;
