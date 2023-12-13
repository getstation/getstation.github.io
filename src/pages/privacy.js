import React from 'react';
import App from '../components/layout/App';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';
import bkg_privacy from '../images/bkg-privacy.svg';
import slack_img from '../images/slack-imgs.png';

const NotFoundPage = () => {
  const DATA = {
    "title": "Privacy policy",
    "subtitle": {
      "html": "<p>What data does Station collect & what's the usage?<br> <strong>The answer is simple: Station collects nothing. No login, no tracking, no data collection.</strong></p>"
    },
    "bkg_image": {
      "url": bkg_privacy
    },
    "seo_title": "Station • Privacy Policy",
    "seo_description": "Privacy Policy.",
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
        background={DATA.bkg_image.url}
      />
    </App>
  );
};
export default NotFoundPage;
