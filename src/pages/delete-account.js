import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';

import { login, logout, isAuthenticated, getProfile, getTokens } from "../utils/auth"

const DownloadNextPage = props => {
  if (!isAuthenticated()) {
    console.warn('Redirecting to login...');
    login();
    return <p>Redirecting to login...</p>
  }

  const DATA = props.data.content.data;
  const user = getProfile();
  const tokens = getTokens();

  console.warn(user, tokens, DATA);

  return (
    <AppMinimal headerTheme="dark">
      <span/>
    </AppMinimal>
  );
};
export default DownloadNextPage;
export const pageQuery = graphql`
  query deleteAccountPageQuery {
    content: prismicDeleteAccount {
      data {
        title
        subtitle
        button_cancel_text
        button_confirm_text
        background {
          url
          dimensions {
            width
            height
          }
        }
      }
    }
  }
`;
