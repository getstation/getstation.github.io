import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import FeatureCards from '../components/organims/FeatureCards';

const IndexPage = props => {
  const CARDS = JSON.parse(props.data.cards.dataString);
  return (
    <App>
      <Hero
        title="Features Overview"
        subtitle="Check what’s under the hood!"
        gradient={{ top: '#4ED8E4', bottom: '#1410B8' }}
      />
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
