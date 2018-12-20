import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import HeroHome from '../components/organims/HeroHome';
import Reassurance from '../components/organims/Reassurance';
import Presentation from '../components/organims/Presentation';
import More from '../components/organims/More';
import Seo from '../components/molecules/Seo';
import Opinions from '../components/organims/Opinions';
import SeeAllApps from '../components/organims/SeeAllApps';
import SliderMentions from '../components/organims/SliderMentions';
import { URL } from '../const';

const IndexPage = props => {
  const DATA = props.data.content.data;
  const DOWNLOAD = props.data.download;

  return (
    <App headerTheme="dark">
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <HeroHome
        title={DATA.hero_title}
        content={DATA.hero_content}
        legend={DATA.hero_legend}
        video={DATA.hero_video_url}
        image={DATA.hero_image}
        download={DOWNLOAD}
        downloadTracking={DATA.hero_download_tracking_class}
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
          button={{
            text: DATA.more_button_text,
            url: DATA.more_button_url,
            type: DATA.more_button_type,
            tracking: DATA.more_button_tracking_class,
          }}
        />
      )}
      {DATA.opinion && DATA.opinon___use_station_to && (
        <Opinions
          slideUseText={DATA.opinon___use_station_to}
          slideText={DATA.opinion}
          download={{
            text: DATA.download_text,
            url: DOWNLOAD.data.button_url.url,
            tracking: DATA.opinion_download_tracking_class,
          }}
        />
      )}
      {DATA.mentions_title && DATA.tweet && (
        <SliderMentions
          title={DATA.mentions_title}
          background={{
            top: DATA.mentions_gradient_top,
            bottom: DATA.mentions_gradient_bottom,
          }}
          data={DATA.tweet}
          link={{
            text: DATA.all_tweets_text,
            url: DATA.all_tweets_url,
          }}
        />
      )}
      {DATA.seeallapps_title && (
        <SeeAllApps
          title={DATA.seeallapps_title}
          button={{
            text: DATA.seeallapps_button_text,
            url: DATA.seeallapps_button_url,
            type: DATA.seeallapps_button_type,
            tracking: DATA.seeallapps_tracking_class,
          }}
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
        seo_title
        seo_description
        seo_image {
          url
        }
        hero_title
        hero_content
        hero_legend
        hero_download_tracking_class
        hero_video_url
        hero_image {
          url
          dimensions {
            width
            height
          }
        }
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
          title {
            html
          }
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
        more_button_url
        more_button_type
        more_button_tracking_class
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
        opinion_download_tracking_class
        mentions_title
        mentions_gradient_top
        mentions_gradient_bottom
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
        seeallapps_button_url
        seeallapps_button_text
        seeallapps_button_type
        seeallapps_tracking_class
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
