import React from 'react';
import { graphql } from 'gatsby';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';

class EmailVerification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      success: true,
    }
  }

  componentDidMount() {
    // we load the email verification data from the
    // URL parameters
    if (window) {
      const currentURL = window.location.href;
      const url = new URL(currentURL);
      this.setState({
        success: url.searchParams.get('success') === 'true'
      })
  }
  }
  
  render() {
    const { props, state } = this;
    const { success } = state;

    const DATA_ERROR = JSON.parse(props.data.error.dataString);
    const DATA_SUCCESS = JSON.parse(props.data.success.dataString);
    return (
      <AppMinimal>
        <Seo
          title={
            success ? DATA_SUCCESS.seo_title : DATA_ERROR.seo_title
          }
          description={
            success
              ? DATA_SUCCESS.seo_description
              : DATA_ERROR.seo_description
          }
          image={
            success
              ? DATA_SUCCESS.seo_image.url
              : DATA_ERROR.seo_image.url
          }
        />
        <SectionFullPage
          title={success ? DATA_SUCCESS.title : DATA_ERROR.title}
          subtitle={
            success
              ? props.data.success.data.subtitle.html
              : props.data.error.data.subtitle.html
          }
          cta={{
            url:
              success
                ? DATA_SUCCESS.button_url
                : DATA_ERROR.button_url,
            text:
              success
                ? DATA_SUCCESS.button_text
                : DATA_ERROR.button_text,
            type: 'external',
            theme: 'dark',
            shadow: false,
            size: 'M',
          }}
          background={
            success
              ? DATA_SUCCESS.bkg_image.url
              : DATA_ERROR.bkg_image.url
          }
          image={{
            url:
              success ? DATA_SUCCESS.image.url : DATA_ERROR.image.url,
            width:
              success
                ? DATA_SUCCESS.image.dimensions.width
                : DATA_ERROR.image.dimensions.width,
            height:
              success
                ? DATA_SUCCESS.image.dimensions.height
                : DATA_ERROR.image.dimensions.height,
          }}
        />
      </AppMinimal>
    )
  };
}

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
