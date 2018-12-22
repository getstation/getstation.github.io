import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';

const NotFoundPage = props => {
  const DATA = props.data.content.data;
  return (
    <App headerTheme="dark">
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <SectionFullPage
        title={DATA.title}
        subtitle={DATA.subtitle}
        cta={{
          url: '/',
          text: DATA.button_text,
          type: 'internal',
        }}
        background={DATA.bkg_image.url}
        image={{
          url: DATA.image.url,
          width: DATA.image.dimensions.width,
          height: DATA.image.dimensions.height,
        }}
      />
    </App>
  );
};
export default NotFoundPage;
export const pageQuery = graphql`
  query notFoundQuery {
    content: prismic404 {
      data {
        title
        subtitle
        button_text
        image {
          url
          dimensions {
            width
            height
          }
        }
        bkg_image {
          url
        }
        seo_title
        seo_description
        seo_image {
          url
        }
      }
    }
  }
`;
