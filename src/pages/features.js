import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import Seo from '../components/molecules/Seo';
import FeatureCards from '../components/organims/FeatureCards';
import FeatureMore from '../components/molecules/FeatureMore';

const FeaturesPage = props => {
  const DATA = JSON.parse(props.data.cards.dataString);
  const DOWNLOAD = props.data.download;
  return (
    <App>
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
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
