import React from 'react';
import App from '../components/layout/App';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';
import img_404 from '../images/404-img.svg';
import bkg_404 from '../images/bkg-404.svg';
import slack_img from '../images/slack-imgs.png';

const NotFoundPage = () => {
  const DATA = {
    "title": "You landed on uncharted territory",
    "subtitle": {
      "html": "<p>No worries though: <strong>we&#39;re here to help</strong>.</p>"
    },
    "button_text": "Find my way back",
    "button_url": "/",
    "button_type": "internal",
    "image": {
      "url": img_404,
      "dimensions": {
        "width": 180,
        "height": 77
      }
    },
    "bkg_image": {
      "url": bkg_404
    },
    "seo_title": "Station • 404",
    "seo_description": "You landed on uncharted territory. No worries though: we're here to help.",
    "seo_image": {
      "url": slack_img
    }
  };
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
