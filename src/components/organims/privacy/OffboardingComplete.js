import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';

import { mqMin } from '../../../styles/breackpoint';
import * as font from '../../../styles/fonts';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';

class OffboardingComplete extends React.Component {
  constructor(props) {
    super(props);
    this.logout = props.logout;
    this.navigate = props.navigate;

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
    const { bkg_image, content, button_confirm_text } = queryResults.content.data;

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
          <div dangerouslySetInnerHTML={{__html: content.html}} />
        </Title>

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
          {button_confirm_text}
        </Button>
      </SectionMinimal>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyOffboardingComplete {
    content: prismicOffboarding(uid: { eq: "offboarding-complete" }) {
      data {
        content {
          html,
        },
        button_confirm_text,
        bkg_image {
          url
        }
      }
    }
  }
`;

export default OffboardingComplete;