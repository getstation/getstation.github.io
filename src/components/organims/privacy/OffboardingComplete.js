import React from 'react';
import { StaticQuery, graphql } from "gatsby";

import SectionMinimal from '../../molecules/SectionMinimal';

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
    const data = queryResults.content.data;
    const bkgUrl = data.background.url;

    // Render with data
    return (
      <SectionMinimal background={bkgUrl}>
        You are nowhere to be found anymore now. Crushed by a blackhole
        <br/>
        <button onClick={this.logout}>Logout</button>
      </SectionMinimal>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyOffboardingComplete {
    content: prismicDeleteAccount {
      data {
        background {
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