import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import HeroHome from '../components/organims/HeroHome';
import Reassurance from '../components/organims/Reassurance';
import Presentation from '../components/organims/Presentation';
import * as font from '../styles/fonts';

const IndexPage = props => {
  const DATA = props.data.content.data;
  const DOWNLOAD = props.data.download;
  return (
    <App>
      <HeroHome
        title={DATA.hero_title}
        content={DATA.hero_content}
        legend={DATA.hero_legend}
        download={DOWNLOAD}
      />
      <Reassurance
        title={DATA.reassurance_title}
        content={DATA.reassurance_content}
        logos={DATA.reassurance_logos}
      />
      <Presentation data={DATA.presentation_list} />
    </App>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query IndexQuery {
    content: prismicHomepage {
      data {
        hero_title
        hero_content
        hero_legend
        reassurance_title
        reassurance_content
        reassurance_logos {
          title
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
        presentation_list {
          subtitle
          title
          content {
            html
          }
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
      }
    }
    download: prismicDownloadapp {
      data {
        button_text
        button_url {
          url
        }
        plateform_list {
          type
          url {
            url
          }
        }
      }
    }
  }
`;
