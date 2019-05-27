import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';

import SectionMinimal from '../../molecules/SectionMinimal';
import Button from '../../atoms/Button';
import Content from '../../molecules/Content';

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
        <Content>
          <div dangerouslySetInnerHTML={{__html: content.html}} />
        </Content>

        <br/>
        
        <Button
          theme="primary"
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
        title,
        content {
          html,
        },
        button_confirm_text,
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

export default OffboardingComplete;