import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
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
      <div
        className={css({
          backgroundImage: `linear-gradient(to top, ${DATA.main_gradient_bottom ||
            'transparent'}, ${DATA.main_gradient_top || 'transparent'})`,
        })}
      >
        <FeatureCards data={DATA} download={DOWNLOAD.data} />
        <FeatureMore data={DATA.morebox} />
      </div>
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
        button_url_mobile {
          url
        }
      }
    }
  }
`;
