import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import Seo from '../components/molecules/Seo';
import TeamSection1 from '../components/organims/TeamSection1';
import TeamManifesto from '../components/organims/TeamManifesto';
import TeamTimeline from '../components/organims/TeamTimeline';

const Presskit = props => {
  const DATA = props.data.team.data;
  return (
    <App>
      <Seo
        title={DATA.seo_title}
        description={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
      <TeamSection1
        text={DATA.section_1_text.html}
        button={{
          top: {
            url: DATA.section_1_button_url,
            text: DATA.section_1_button_text,
            type: DATA.section_1_button_type,
            theme: DATA.section_1_button_theme,
            tracking: DATA.section_1_button_tracking_class,
          },
          bottom: {
            url: DATA.section_2_button_url,
            text: DATA.section_2_button_text,
            type: DATA.section_2_button_type,
            theme: DATA.section_2_button_theme,
            tracking: DATA.section_3_button_tracking_class,
          },
        }}
        members={DATA.member}
      />
      <TeamManifesto
        data={DATA.manifesto}
        button={{
          url: DATA.section_3_button_url,
          text: DATA.section_3_button_text,
          type: DATA.section_3_button_type,
          theme: DATA.section_3_button_theme,
          tracking: DATA.section_3_button_tracking_class,
        }}
      />
      <TeamTimeline
        title={DATA.timeline_title}
        text={DATA.timeline_text}
        timeline={DATA.timeline_event}
        button={DATA.button_load_more_text}
      />
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query teamQuery {
    team: prismicTeam {
      data {
        seo_title
        seo_description
        seo_image {
          url
        }
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
        section_1_text {
          html
        }
        section_1_button_url
        section_1_button_text
        section_1_button_type
        section_1_button_theme
        section_1_button_tracking_class
        section_2_button_url
        section_2_button_text
        section_2_button_type
        section_2_button_theme
        section_2_button_tracking_class
        section_3_button_url
        section_3_button_text
        section_3_button_type
        section_3_button_theme
        section_3_button_tracking_class
        member {
          thumb {
            url
            dimensions {
              width
              height
            }
          }
          name
          job
          twitter
          instagram
          personal_link
          github
        }
        manifesto {
          title
          title_color
          subtitle
          content {
            html
          }
        }
        timeline_title
        timeline_text
        timeline_event {
          date
          title
          url
          text
          thumb {
            url
            dimensions {
              width
              height
            }
          }
        }
        button_load_more_text
      }
    }
  }
`;
