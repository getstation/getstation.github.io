import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';

import { mqMin } from '../../../styles/breackpoint';
import * as font from '../../../styles/fonts';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Content from '../../molecules/Content';

class OffboardingCancel extends React.Component {
  constructor(props) {
    super(props);
    this.logout = props.logout;
    this.navigate = props.navigate;
    this.actualRender = this.actualRender.bind(this);
  }

  actualRender(queryResults) {
    // Extract data from Query
    if (!queryResults) return null;
    const {
      title,
      bkg_image,
      content,
      button_cancel_text,
      button_confirm_text,
    } = queryResults.content.data;

    // Render with data
    return (
      <SectionMinimal background={bkg_image.url}>
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

        <Content>
          <div dangerouslySetInnerHTML={{__html: content.html}} />
        </Content>

        <br/>

        <Button
          theme="ghost"
          size="L"
          to="/"
          element={Link}
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {button_cancel_text}
        </Button>
      </SectionMinimal>
    );
  }

  render() {
    return (
      <StaticQuery
        query={QUERY}
        render={this.actualRender}
      ></StaticQuery>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyOffboardCancel {
    content: prismicOffboarding(uid: { eq: "offboarding-cancel" }) {
      data {
        title,
        content {
          html,
        },
        button_confirm_text,
        button_cancel_text,
        bkg_image {
          url
        }
      }
    }
  }
`;

export default OffboardingCancel;