import React from 'react';
import { css } from 'emotion';
import App from '../components/layout/App';
import HeroHome from '../components/organims/HeroHome';
import Reassurance from '../components/organims/Reassurance';
import Presentation from '../components/organims/Presentation';
import More from '../components/organims/More';
import Seo from '../components/molecules/Seo';
import SeeAllApps from '../components/organims/SeeAllApps';
import seo from '../images/seo.png';
import hero_reward_img from '../images/hero-ph-award7.svg';
import hero_video from '../images/station-video-fullscreen-ratio2.mp4';
import hero_video_poster from '../images/poster-video-white1x.jpeg';
import hero_home_illustration from '../images/hero-home-illustration.svg';
import github from '../images/GitHub_Logo.png';
import feature_1 from '../images/feature-1.svg';
import feature_2 from '../images/feature-2.svg';
import feature_3 from '../images/feature-3.svg';
import autosleep from '../images/autosleep.svg';
import multiaccounts from '../images/multiaccounts.svg';
import extensions from '../images/extensions.svg';
import ycombinator from '../images/ycombinator.svg';
import dropbox from '../images/dropbox.svg';
import gitlab from '../images/gitlab.svg';
import hubspot from '../images/hubspot.svg';
import apps_logos_5lines from '../images/apps-logos-5lines.svg';

const DATA = {
  "seo_title": "Station • One app to rule them all",
  "seo_description": "Station unifies all your work tools in one neat and productive interface.",
  "seo_image": {
    "url": seo
  },
  "hero_title": "One app to rule them all",
  "hero_content": "Station is the first open-source smart browser for busy people. \nA single place for all of your web applications.",
  "hero_legend": "apps available",
  "hero_download_tracking_class": "analytics-download-station-landing-viewport",
  "hero_reward_link": "http://getstation.com",
  "hero_reward_img": {
    "url": hero_reward_img,
    "dimensions": {
      "height": 88,
      "width": 195
    }
  },
  "hero_video": {
    "url": hero_video
  },
  "hero_video_poster": {
    "url": hero_video_poster
  },
  "hero_image": {
    "url": hero_home_illustration,
    "dimensions": {
      "width": 920,
      "height": 357
    }
  },
  "reassurance_title": "Open Source",
  "reassurance_content": "Station is maintained by its open source community. If you want to contribute to station desktop app, check our github.",
  "reassurance_button": {
    "text": "Github",
    "url": 'https://github.com/getstation/desktop-app',
    "tracking_class": "analytics_download_reassurance"
  },
  "reassurance_logos": [
    {
      "title": "Github",
      "image": {
        "url": github,
        "dimensions": {
          "width": 68,
          "height": 28
        }
      }
    }
  ],
  "presentation_list": [
    {
      "subtitle": "Lost in tabs?",
      "title": {
        "html": "<p>Stay organized with the <strong>smart dock.</strong></p>"
      },
      "content": {
        "html": "<p>Station automatically groups your pages by application. Your workspace is cleaner than ever, finding what you need is easy.</p>"
      },
      "image": {
        "url": feature_1,
        "dimensions": {
          "width": 1988,
          "height": 1260
        }
      }
    },
    {
      "subtitle": "Context-switching is a pain?",
      "title": {
        "html": "<p>Multitask like a beast with the <strong>quick switch.</strong></p>"
      },
      "content": {
        "html": "<p>An easy central way to search across your apps and pages. Any document, to-do list, spreadsheet or conversation is just a click away!</p>"
      },
      "image": {
        "url": feature_2,
        "dimensions": {
          "width": 1988,
          "height": 1260
        }
      }
    },
    {
      "subtitle": "Getting distracted easily?",
      "title": {
        "html": "<p>Get stuff done with the <strong>focus mode.</strong></p>"
      },
      "content": {
        "html": "<p>Decide when and which applications should send you notifications. Get your best work done away from distractions.</p>"
      },
      "image": {
        "url": feature_3,
        "dimensions": {
          "width": 1988,
          "height": 1260
        }
      }
    }
  ],
  "more_title": "There’s more!",
  "more_list": [
    {
      "title": "Page autosleep",
      "content": "We intelligently sleep applications so that slow-downs remain a thing of the past.",
      "image": {
        "url": autosleep,
        "dimensions": {
          "width": 84,
          "height": 84
        }
      }
    },
    {
      "title": "Multi-account",
      "content": "Log into multiple accounts at the same time, without any hassle.",
      "image": {
        "url": multiaccounts,
        "dimensions": {
          "width": 84,
          "height": 84
        }
      }
    },
    {
      "title": "Chrome extensions",
      "content": "1Password, Mixmax, Gmelius, Clearbit and Mailtracker are already supported. Dozens incoming.",
      "image": {
        "url": extensions,
        "dimensions": {
          "width": 84,
          "height": 84
        }
      }
    }
  ],
  "more_button_text": "See all features",
  "more_button_url": "/features",
  "more_button_type": "internal",
  "more_button_tracking_class": "analytics-see-features-mid-page",
  "opinion": [
    {
      "name": "Michael Seibel",
      "job": "Founders",
      "jobs": "CEO",
      "use_for": "work faster.",
      "quote": "I use it every single day and it's been amazing! It has made my work life so much easier.",
      "logo": {
        "url": ycombinator,
        "dimensions": {
          "width": 143,
          "height": 30
        }
      }
    },
    {
      "name": "Zach Johnston",
      "job": "Designers",
      "jobs": "Designer",
      "use_for": "get stuff done.",
      "quote": "Station gives me power back over my noisy, never-ending communication apps.",
      "logo": {
        "url": dropbox,
        "dimensions": {
          "width": 143,
          "height": 30
        }
      }
    },
    {
      "name": "Shay Redmond",
      "job": "Managers",
      "jobs": "Product Manager",
      "use_for": "stay focused.",
      "quote": "Station is great at helping me avoid distractions and stay focused on one task at a time.",
      "logo": {
        "url": hubspot,
        "dimensions": {
          "width": 143,
          "height": 30
        }
      }
    },
    {
      "name": "Victor Hernandez",
      "job": "Developers",
      "jobs": "Solutions Architect",
      "use_for": "get in the zone.",
      "quote": "For work or for play with web apps, Station is vital for my productivity.",
      "logo": {
        "url": gitlab,
        "dimensions": {
          "width": 143,
          "height": 30
        }
      }
    },
    {
      "name": "Ronan Spratt",
      "job": "Designers",
      "jobs": "Design Lead",
      "use_for": "craft experiences.",
      "quote": "Having all my communication apps in one place is a big time saver.",
      "logo": {
        "url": hubspot,
        "dimensions": {
          "width": 143,
          "height": 30
        }
      }
    }
  ],
  "opinon___use_station_to": "use Station to",
  "download_text": "Download now",
  "opinion_download_tracking_class": "analytics-download-station-testimonials",
  "mentions_title": "They use Station every day",
  "mentions_gradient_top": "#3ca9cd",
  "mentions_gradient_bottom": "#2061A8",
  "seeallapps_title": "apps available!",
  "seeallapps_image": {
    "url": apps_logos_5lines,
    "dimensions": {
      "width": 1520,
      "height": 394
    }
  }
};

const DOWNLOAD = {
  "data": {
    "button_text": "Download for free",
    "button_url": {
      "url": "https://github.com/getstation/desktop-app/releases/latest"
    },
    "button_url_mobile": {
      "url": "https://github.com/getstation/desktop-app/releases/latest"
    },
    "plateform_list": [
      {
        "type": "apple",
        "url": {
          "url": "https://github.com/getstation/desktop-app/releases/latest/download/Station.dmg"
        }
      },
      {
        "type": "windows",
        "url": {
          "url": "https://github.com/getstation/desktop-app/releases/latest/download/Station-Setup.exe"
        }
      },
      {
        "type": "linux",
        "url": {
          "url": "https://github.com/getstation/desktop-app/releases/latest/download/Station-x86_64.AppImage"
        }
      }
    ]
  }
};

const IndexPage = () => (
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
      video={DATA.hero_video.url}
      videoPoster={DATA.hero_video_poster.url}
      image={DATA.hero_image}
      download={DOWNLOAD}
      downloadTracking={DATA.hero_download_tracking_class}
      rewardUrl={DATA.hero_reward_link}
      rewardImg={DATA.hero_reward_img}
    />
    <Reassurance
      title={DATA.reassurance_title}
      content={DATA.reassurance_content}
      logos={DATA.reassurance_logos}
      button={DATA.reassurance_button}
    />
    <Presentation
      data={DATA.presentation_list}
      className={css({
        marginTop: 100,
      })}
    />
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
    <SeeAllApps
      title={DATA.seeallapps_title}
      data={DATA.seeallapps_image}
    />
  </App>
);

export default IndexPage;
