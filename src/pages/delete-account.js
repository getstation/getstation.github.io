import React from 'react';
import { graphql, navigate } from 'gatsby';
import AppMinimal from '../components/layout/AppMinimal';

import { login, isAuthenticated, getProfile, getTokens } from "../utils/auth"
import SectionFullPage from '../components/molecules/SectionFullPage';
import Button from '../components/atoms/Button';
import DeleteAccountButton from '../components/molecules/DeleteAccountButton';

const replaceName = (str, name) => str.replace('[name]', name);

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const DownloadNextPage = props => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>
  }

  const DATA = props.data.content.data;
  const user = getProfile();
  // const tokens = getTokens();

  const deleteAccount = async () => {
    await sleep(2000); // temporary
    navigate('/404'); // temporary
  };

  return (
    <AppMinimal>
      <SectionFullPage
        title={replaceName(DATA.title, user.given_name)}
        subtitle={DATA.subtitle}
        cta={{
          url: '/logout',
          text: DATA.button_cancel_text,
          theme: 'light',
          shadow: true,
          size: 'L',
        }}
        background={DATA.background.url}
      >
        <DeleteAccountButton method={deleteAccount} >
          {DATA.button_confirm_text}
        </DeleteAccountButton>
      </SectionFullPage>
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
