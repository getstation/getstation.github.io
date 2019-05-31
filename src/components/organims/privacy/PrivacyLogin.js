import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';

import * as font from '../../../styles/fonts';
import { mqMin } from '../../../styles/breackpoint';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';

const boxWidth = 300;
const boxHeight = 502;
const sharedStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 10px 0px',
  borderRadius: rem('5px'),
  display: 'inline-block',
  height: `${boxHeight}px`,
  width: `${boxWidth}px`,
  verticalAlign: 'middle',
}

const LoginBox = styled.div(sharedStyle);
const LoadingMessage = styled.div({
  ...sharedStyle,
  display: 'inline-block',
  lineHeight: `${boxHeight}px`,
  marginLeft: `-${boxWidth}px`,
});

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
        <LoginBox id="login-box"></LoginBox>
        <LoadingMessage>Loading session...</LoadingMessage>
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
