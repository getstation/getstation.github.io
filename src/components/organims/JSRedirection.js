import React, { useEffect } from 'react';
import App from '../layout/App';

// todo: move me to Prismic
const PRIVACY_POLICIES_URL = 'https://faq.getstation.com/en/articles/1211678-what-are-your-privacy-policies';

const JSRedirection = ({
  redirectionURL,
  redirectionTitle,
}) => {

  useEffect(() => {
    document.location = redirectionURL;
  })

  return (
    <App headerTheme="dark">
      Redirecting to <a href={redirectionURL}>{redirectionTitle}</a>..
    </App>
  );
};
export default JSRedirection;
