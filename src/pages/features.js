import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import FeatureCards from '../components/organims/FeatureCards';
import FeatureMore from '../components/molecules/FeatureMore';

const FeaturesPage = props => {
  const DATA = JSON.parse(props.data.cards.dataString);
  const DOWNLOAD = props.data.download;
  return (
    <App>
      <Hero
        title="Features Overview"
        subtitle="Check what’s under the hood!"
        gradient={{ top: '#4ED8E4', bottom: '#1410B8' }}
      />
      <FeatureCards data={DATA} download={DOWNLOAD.data} />
      <FeatureMore data={DATA.morebox} />
    </App>
  );
};

export default FeaturesPage;
export const pageQuery = graphql`
  query featuresQuery {
    cards: prismicFeaturespage {
      dataString
    }
    download: prismicDownloadapp {
      data {
        button_text
        button_url {
          url
        }
      }
    }
  }
`;
