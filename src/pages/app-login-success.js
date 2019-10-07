import React from 'react';
import { graphql } from 'gatsby';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';

class AppLoginSuccess extends React.Component {

  render() {
    const { props } = this;
    const { data } = props.data.prismicAppLoginSuccess;
    return (
      <AppMinimal>
        <Seo
          title={data.seo_title}
          description={data.seo_description}
        />
        <SectionFullPage
          title={data.title.text}
          subtitle={data.subtitle.text}
          background={data.bkg_image.url}
          image={{
            url: data.image.url,
            width: data.image.dimensions.width,
            height: data.image.dimensions.height,
          }}
        />
      </AppMinimal>
    );
  }
}

export default AppLoginSuccess;

export const pageQuery = graphql`
  query appLoginSuccess {
    prismicAppLoginSuccess{
      data {
        title {
          text
        }
        subtitle {
          text
        }
        image {
          url,
          dimensions {
            width,
            height
          }
        }
        bkg_image {
          url
        }
        seo_description
        seo_title
      }
    }
  }
`;
