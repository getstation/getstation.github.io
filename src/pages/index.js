import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import HeroHome from '../components/organims/HeroHome';
import Reassurance from '../components/organims/Reassurance';
import Presentation from '../components/organims/Presentation';
import More from '../components/organims/More';
import Opinions from '../components/organims/Opinions';
import SeeAllApps from '../components/organims/SeeAllApps';
import SliderMentions from '../components/organims/SliderMentions';
import { URL } from '../const';

const IndexPage = props => {
  const DATA = props.data.content.data;
  const DOWNLOAD = props.data.download;

  return (
    <App headerTheme="dark">
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

      {DATA.presentation_list && <Presentation data={DATA.presentation_list} />}
      {DATA.more_title && (
        <More
          title={DATA.more_title}
          data={DATA.more_list}
          button={DATA.more_button_text}
          buttonUrl={URL.features}
        />
      )}
      {DATA.opinion && DATA.opinon___use_station_to && (
        <Opinions
          slideUseText={DATA.opinon___use_station_to}
          slideText={DATA.opinion}
          download={{
            text: DATA.download_text,
            url: DOWNLOAD.data.button_url.url,
          }}
        />
      )}
      <SliderMentions
        title={DATA.mentions_title}
        data={DATA.tweet}
        link={{
          text: DATA.all_tweets_text,
          url: DATA.all_tweets_url,
        }}
      />
      {DATA.seeallapps_title && (
        <SeeAllApps
          title={DATA.seeallapps_title}
          button={DATA.seeallapps_button_text}
          buttonUrl="/"
          data={DATA.seeallapps_image}
        />
      )}
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
        more_title
        more_list {
          title
          content
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
        more_button_text
        opinion {
          name
          job
          use_for
          quote
          logo {
            url
            dimensions {
              width
              height
            }
          }
        }
        opinon___use_station_to
        download_text
        mentions_title
        tweet {
          url
          thumb {
            url
          }
          fullname
          username
          content {
            html
          }
          date
        }
        all_tweets_url
        all_tweets_text
        seeallapps_title
        seeallapps_image {
          url
          dimensions {
            width
            height
          }
        }
        seeallapps_button_text
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
