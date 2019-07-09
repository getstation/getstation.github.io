import React, { useEffect } from 'react';
import App from '../components/layout/App';

// todo: move me to Prismic
const PRIVACY_POLICIES_URL = 'https://faq.getstation.com/en/articles/1211678-what-are-your-privacy-policies';

const PrivacyPage = props => {

  useEffect(() => {
    document.location = PRIVACY_POLICIES_URL;
  })

  return (    
    <App headerTheme="dark">
      Redirecting to <a href={PRIVACY_POLICIES_URL}>privacy policies</a>..
    </App>
  );
};
export default PrivacyPage;
