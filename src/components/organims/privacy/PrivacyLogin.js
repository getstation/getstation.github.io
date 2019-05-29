import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';

import * as font from '../../../styles/fonts';
import { mqMin } from '../../../styles/breackpoint';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';

const LoginBox = styled('div')`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 10px 0px;
  border-radius: 0.8125rem;
  display: inline-block;
  height: 502px;
  width: 300px;
  vertical-align: middle;
`;

const LoadingMessage = styled('div')`
  display: inline-block;
  line-height: 502px;
`;

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
    const { bkg_image, title } = queryResults.content.data;

    // Render with data
    return (
      <SectionMinimal background={bkg_image.url} customCss={{
        backgroundPosition: 'center calc(50% + 80px)',
        backgroundSize: 'auto',
      }}>
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
        <LoginBox id="login-box">
          <LoadingMessage>Loading session...</LoadingMessage>
        </LoginBox>
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
        bkg_image {
          url
        }
      }
    }
  }
`;

export default PrivacyLogin;
