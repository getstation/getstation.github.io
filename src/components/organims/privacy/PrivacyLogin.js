import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';

import { AuthenticationBox, ApolloProvider, FirebaseAuthProvider } from '@getstation/authentication';

console.log(ApolloProvider, FirebaseAuthProvider);

import * as font from '../../../styles/fonts';
import { mqMin } from '../../../styles/breackpoint';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';

const boxWidth = 300;
const boxHeight = 502;
const sharedStyle = {
  display: 'inline-block',
  height: `${boxHeight}px`,
  width: `${boxWidth}px`,
  verticalAlign: 'middle',
}

const LoginBox = styled.div({
  ...sharedStyle,
  boxShadow: 'rgba(0, 0, 0, 0.20) 0px 4px 12px 0px',
  borderRadius: rem('5px'),
});
const LoadingMessage = styled.div({
  ...sharedStyle,
  display: 'inline-block',
  lineHeight: `${boxHeight}px`,
  marginLeft: `-${boxWidth}px`,
});

class PrivacyLogin extends React.Component {
  constructor(props) {
    super(props);

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
    const { onAuthenticated } = this.props;

    // Render with data
    return (
      <SectionMinimal>
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
        <AuthenticationBox allowSignUp={false} onAuthenticated={onAuthenticated} />
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
