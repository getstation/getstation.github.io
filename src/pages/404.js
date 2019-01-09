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
        subtitle={DATA.subtitle.html}
        cta={{
          url: DATA.button_url,
          text: DATA.button_text,
          type: DATA.button_type,
          theme: 'primary',
          shadow: true,
          size: 'L',
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
        subtitle {
          html
        }
        button_text
        button_url
        button_type
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
