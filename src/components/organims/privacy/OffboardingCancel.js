import React from 'react';
import { StaticQuery, graphql } from "gatsby";
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

  backToSite() {
    alert('Navigate to homepage !');
  }

  openStation() {
    alert('Opening station ...');
  }

  actualRender(queryResults) {
    // Extract data from Query
    if (!queryResults) return null;
    const data = queryResults.content.data;

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
          {data.title}
        </Title>

        <br/>

        <Content>
          { data.content.html }
        </Content>

        <br/>

        <Button
          onClick={this.backToSite}
          theme="ghost"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_cancel_text}
        </Button>

        <Button
          onClick={this.openStation}
          theme="danger"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_confirm_text}
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
    content: prismicOffboarding {
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
        }
      }
    }
  }
`;

export default OffboardingCancel;