import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import * as font from '../../../styles/fonts';
import { mqMin, mqMax } from '../../../styles/breackpoint';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';

const LoginBox = styled('div')`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 10px 0px;
  border-radius: 0.8125rem;
  display: inline-block;
`;

class PrivacyLogin extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      logging: false,
    };

    this.login = props.login;
    this.loginHandler = this.loginHandler.bind(this);
    this.actualRender = this.actualRender.bind(this);
  }

  loginHandler() {
    this.setState({ logging: true });
    this.login();
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
    const { logging } = this.state;

    // Extract data from Query
    if (!queryResults) return null;
    const { bkg_image, title } = queryResults.content.data;

    // Render with data
    return (
      <SectionMinimal background={bkg_image.url} bgStaticCenter="true">
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
        <LoginBox id="login-box"></LoginBox>
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
