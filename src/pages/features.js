import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import FeatureCards from '../components/organims/FeatureCards';

const IndexPage = props => {
  const CARDS = JSON.parse(props.data.cards.dataString);
  return (
    <App>
      <FeatureCards data={CARDS} />
    </App>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query featureQuery {
    cards: prismicFeaturespage {
      dataString
    }
  }
`;
