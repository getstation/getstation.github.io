import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import AppMinimal from '../components/layout/AppMinimal';
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';
import DeleteAccountButton from '../components/molecules/DeleteAccountButton';

const replaceName = (str, name) => str.replace('[name]', name);

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const DELETE_ACCOUNT = gql`
  mutation {
    deleteMyData {
      success
    }
  }
`;

const DeleteAccountPage = props => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>
  }

  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);
  const [deleteAccountError, setDeleteAccountError] = useState(null);

  const DATA = props.data.content.data;
  const user = getProfile();

  const createDeleteAccountCallback = (deleteAccount) => async () => {
    setDeleting(true);
    try {
      const res = await deleteAccount();
      console.log('=> deleteAccount result:', res);
    } catch(e) {
      console.error('=> deleteAccount error:', e);
      setDeleteAccountError(String(e));
      return;
    }

    setDeleting(false);
    setDone(true);

    await sleep(2000);
    navigate('/logout');
  };

  const isButtonDisabled = () => Boolean(deleting || done || deleteAccountError);

  const getButtonText = () => {
    if (deleteAccountError) return DATA.button_confirm_error_text;
    if (done) return DATA.button_confirm_done_text;
    if (deleting) return DATA.button_confirm_deleting_text;
    return DATA.button_confirm_text;
  };

  const getTitle = () => replaceName(DATA.title, user.given_name);
  const getSubTitle = () => deleteAccountError ? deleteAccountError : DATA.subtitle;

  return (
    <Mutation mutation={DELETE_ACCOUNT}>
      {(deleteAccount) => (
        <AppMinimal>
          <Seo
            title={DATA.seo_title}
            description={DATA.seo_description}
          />
          <SectionFullPage
            title={getTitle()}
            subtitle={getSubTitle()}
            cta={{
              url: '/logout',
              text: DATA.button_cancel_text,
              theme: 'light',
              shadow: true,
              size: 'L',
            }}
            background={DATA.background.url}
          >
            <DeleteAccountButton
              onClick={createDeleteAccountCallback(deleteAccount)}
              disabled={isButtonDisabled()}
            >
              {getButtonText()}
            </DeleteAccountButton>
          </SectionFullPage>
        </AppMinimal>
      )}
    </Mutation>
  );
};

export default DeleteAccountPage;
export const pageQuery = graphql`
  query deleteAccountPageQuery {
    content: prismicDeleteAccount {
      data {
        title
        subtitle
        bulletpoints {
          html
        }
        button_cancel_text
        button_confirm_text
        button_confirm_error_text
        button_confirm_done_text
        button_confirm_deleting_text
        background {
          url
          dimensions {
            width
            height
          }
        }
        seo_title
        seo_description
      }
    }
  }
`;
