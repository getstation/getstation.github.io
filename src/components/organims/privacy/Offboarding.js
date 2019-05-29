import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { mqMin } from '../../../styles/breackpoint';
import * as font from '../../../styles/fonts';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Content from '../../molecules/Content';
import Modal from '../../molecules/Modal';

// API Query to delete personal data
const DELETE_ACCOUNT = gql`
  mutation {
    deleteMyData {
      success
    }
  }
`;

/**
 * UI Componenent displaying the prompt to delete an account and
 * the confirmation modal.
 */
class Offboarding extends React.Component {
  constructor(props) {
    super(props);

    this.logout = props.logout;
    this.navigate = props.navigate;
    this.actualRender = this.actualRender.bind(this);

    this.state = {
      confirm: false,
      showModal: false,
    }
  }

  cancelOffBoarding = () => {
    this.navigate('cancelled');
  }

  offboard = () => {
    this.setState({ showModal: true });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  confirm = (deleteAccount) => async () => {
    try {
      const res = await deleteAccount();
      this.navigate('confirmed');
    } catch (err) {
      this.navigate('failed');
    }
  }

  /**
   * Wrap the rendered DOM into a Gatsby StaticQuery and will
   * inject the required data.
   */
  render() {
    return (
      <StaticQuery
        query={QUERY}
        render={this.actualRender}
      ></StaticQuery>
    );
  }

  /**
   * Function that will render the actual content of the component
   * @param {*} queryResults 
   */
  actualRender(queryResults) {
    const { showModal } = this.state;
    const { profile } = this.props;

    // Extract data from Query
    if (!queryResults) return null;
    const data = queryResults.content.data;

    const title = data.title.replace('[name]', profile.given_name);

    // Render with data
    return (
      <SectionMinimal background={data.bkg_image.url}>
        <Title
          element="h1"
          className={css({
            margin: `${rem(40)} 0 ${rem(10)}`,
            fontSize: font.XXL,
            [[mqMin[2]]]: {
              fontSize: font.XXXL,
            },
          })}
        >
          {title}
        </Title>

        <br/>

        <Content>
          <div dangerouslySetInnerHTML={{__html: data.content.html}} />
        </Content>

        <br/>

        <Button
          onClick={this.cancelOffBoarding}
          theme="ghost"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_cancel_text}
        </Button>

        <Button
          onClick={this.offboard}
          theme="danger"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_confirm_text}
        </Button>

        { showModal &&
          <Mutation mutation={DELETE_ACCOUNT}>
          {(deleteAccount, { loading, error }) => (
            <Modal
              title={data.body[0].primary.modal_title}
              onCancel={this.close}
              cancelContent={data.body[0].primary.modal_cta_cancel}
              continueContent={data.body[0].primary.modal_cta_confirm}
              onContinue={this.confirm(deleteAccount)}
            >
              <Content>
                { !loading && !error &&
                  <div>{data.body[0].primary.modal_content.text.replace('[email]', profile.email)}</div>
                }
                {loading && <p>Loading...</p>}
                {error && <p>An error occured :( Please contact us !</p>}
              </Content>
            </Modal>
          )}
        </Mutation>
        }
      </SectionMinimal>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyOffboarding {
    content: prismicOffboarding(uid: { eq: "offboarding-process" }) {
      data {
        title,
        content {
          html,
          raw {
            type,
            text,
          },
        },
        button_confirm_text,
        button_cancel_text,
        bkg_image {
          url
          dimensions {
            width
            height
          }
        },
        body {
          primary {
            modal_title,
            modal_content {
              text,
            },
            modal_cta_cancel,
            modal_cta_confirm
          }
        }
      }
    }
  }
`;

export default Offboarding;