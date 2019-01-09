import React from 'react';
import { graphql } from 'gatsby';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';

const EmailVerification = props => {
  let url_string = 'http://getstation.com';
  if (typeof window !== `undefined`) {
    url_string = window.location.href;
  }
  const url = new URL(url_string);
  const success = url.searchParams.get('success');
  const DATA_ERROR = JSON.parse(props.data.error.dataString);
  const DATA_SUCCESS = JSON.parse(props.data.success.dataString);
  return (
    <AppMinimal>
      <Seo
        title={
          success === 'true' ? DATA_SUCCESS.seo_title : DATA_ERROR.seo_title
        }
        description={
          success === 'true'
            ? DATA_SUCCESS.seo_description
            : DATA_ERROR.seo_description
        }
        image={
          success === 'true'
            ? DATA_SUCCESS.seo_image.url
            : DATA_ERROR.seo_image.url
        }
      />
      <SectionFullPage
        title={success === 'true' ? DATA_SUCCESS.title : DATA_ERROR.title}
        subtitle={
          success === 'true'
            ? props.data.success.data.subtitle.html
            : props.data.error.data.subtitle.html
        }
        cta={{
          url:
            success === 'true'
              ? DATA_SUCCESS.button_url
              : DATA_ERROR.button_url,
          text:
            success === 'true'
              ? DATA_SUCCESS.button_text
              : DATA_ERROR.button_text,
          type: 'external',
          theme: 'dark',
          shadow: false,
          size: 'M',
        }}
        background={
          success === 'true'
            ? DATA_SUCCESS.bkg_image.url
            : DATA_ERROR.bkg_image.url
        }
        image={{
          url:
            success === 'true' ? DATA_SUCCESS.image.url : DATA_ERROR.image.url,
          width:
            success === 'true'
              ? DATA_SUCCESS.image.dimensions.width
              : DATA_ERROR.image.dimensions.width,
          height:
            success === 'true'
              ? DATA_SUCCESS.image.dimensions.height
              : DATA_ERROR.image.dimensions.height,
        }}
      />
    </AppMinimal>
  );
};
export default EmailVerification;

export const pageQuery = graphql`
  query emailQuery {
    error: prismicEmailVerificationError {
      dataString
      data {
        subtitle {
          html
        }
      }
    }
    success: prismicEmailVerificationSuccess {
      dataString
      data {
        subtitle {
          html
        }
      }
    }
  }
`;
