import React from 'react';
import { graphql } from 'gatsby';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';

const NotFoundPage = props => {
  const DATA = JSON.parse(props.data.content.dataString);
  return (
    <AppMinimal>
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <SectionFullPage
        title={DATA.title}
        subtitle={DATA.subtitle}
        cta={{
          url: DATA.button_url,
          text: DATA.button_text,
          type: DATA.button_type,
          theme: 'dark',
          shadow: false,
          size: 'M',
        }}
        background={DATA.bkg_image.url}
        image={{
          url: DATA.image.url,
          width: DATA.image.dimensions.width,
          height: DATA.image.dimensions.height,
        }}
      />
    </AppMinimal>
  );
};
export default NotFoundPage;
export const pageQuery = graphql`
  query emailErrorQuery {
    content: prismicEmailVerificationError {
      dataString
    }
  }
`;
