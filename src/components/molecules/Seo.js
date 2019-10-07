import Helmet from 'react-helmet';
import React from 'react';

const Seo = ({ title, description, image }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://getstation.com/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && 
      <meta property="og:image" content={image} />
    }
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://getstation.com/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    {image &&
      <meta property="twitter:image" content={image} />
    }
  </Helmet>
);

export default Seo;
