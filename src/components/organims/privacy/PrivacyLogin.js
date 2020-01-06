import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';
import { ProvidedAuthenticationBox } from '@getstation/authentication-ui';

import * as font from '../../../styles/fonts';
import { mqMin } from '../../../styles/breackpoint';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';

class PrivacyLogin extends React.Component {
  constructor(props) {
    super(props);

    this.login = props.login;
    this.actualRender = this.actualRender.bind(this);
  }

  render() {
    return (
      <StaticQuery
        query={QUERY}
        render={this.actualRender}
      ></StaticQuery>
    );
  }

  actualRender(queryResults) {
    // Extract data from Query
    if (!queryResults) return null;
    const { title } = queryResults.content.data;

    // Render with data
    return (
      <SectionMinimal wrapperClassname={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // line-height is set globally but we expect intial
        // line hight for ProvidedAuthenticationBox
        lineHeight: 'initial',
      })}>
        <Title
          element="h1"
          className={css({
            fontSize: font.XXXL,
            marginBottom: rem(65),
            [[mqMin[1]]]: {
              fontSize: font.XXXL,
            }
          })}>
          {title}
        </Title>
          <ProvidedAuthenticationBox
            apiGQLEndpoint={process.env.GRAPHQL_URI}
            firebaseConfig={{
              apiKey: process.env.FIREBASE_API_KEY,
              authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            }}
            allowSignUp={false}
            onAuthenticated={this.props.onAuthenticated}
          />
      </SectionMinimal>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyLoginData {
    content: prismicOffboarding(uid: { eq: "privacy-login" }) {
      data {
        title,
      }
    }
  }
`;

export default PrivacyLogin;
