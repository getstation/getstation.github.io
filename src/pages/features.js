import React from 'react';
import { css } from 'emotion';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import Seo from '../components/molecules/Seo';
import FeatureCards from '../components/organims/FeatureCards';
import seo from '../images/seo.png';
import dock from '../images/dock.svg';
import notif_all from '../images/notif-all.svg';
import notif_app from '../images/notif-app.svg';
import qs_drive from '../images/qs-drive.svg';
import logo_gdrive from '../images/logo-gdrive.svg';
import qs_slack_support from '../images/qs-slack-support.svg';
import logo_slack from '../images/logo-slack.svg';
import qs_slack_notion from '../images/qs-slack-notion.svg';
import group_3 from '../images/group+3.svg';
import multi_account from '../images/multi-account.svg';
import recents from '../images/recents.svg';
import notif_center from '../images/notif-center.svg';
import sleep from '../images/sleep.svg';
import bookmark from '../images/bookmark.svg';
import app_store from '../images/app-store.svg';
import custom_app from '../images/custom-app.svg';

const FeaturesPage = () => {
  const DATA = {
    "hero_title": "Features Overview",
    "hero_baseline": "Check what’s under the hood!",
    "hero_gradient_top": "#4ed8e4",
    "hero_gradient_bottom": "#1410b8",
    "download_text": "Download now",
    "download_tracking_class": "analytics-download-station-mid-page",
    "title": "Pick your superpower",
    "main_gradient_top": "#ffffff",
    "main_gradient_bottom": "#f5fbff",
    "body": [
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": dock
          },
          "title": "Smart Dock",
          "content": "To avoid ending up with 20+ tabs stacking up on top of each other, all pages are automatically grouped by app.",
          "tag": "Work faster",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": notif_all
          },
          "title": "Do Not Disturb",
          "content": "Stay focused all day long by muting notifications across all your apps. With just one click.",
          "tag": "Stay focused",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": notif_app
          },
          "title": "App Mute",
          "content": "Mute some apps notifications while keeping others active. Be interrupted solely for things that matter to you.",
          "tag": "Stay focused",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": multi_account
          },
          "title": "Multi-Account",
          "content": "Add as many accounts to your Station as you want: your different Gmail, Google Drive or Slack profiles are all neatly integrated.",
          "tag": "Centralize everything",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": recents
          },
          "title": "Recent Documents",
          "content": "Quickly switch between your last used pages: with one simple keyboard shortcut, you can see all the documents you've been working on.",
          "tag": "Work faster",
          "ribbon": "Popular"
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": notif_center
          },
          "title": "Notification Center",
          "content": "Have an overview of the different notifications you've received across all your apps. It's as simple as that.",
          "tag": "Centralize everything",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": sleep
          },
          "title": "Auto Sleep",
          "content": "Apps are dynamically loaded & unloaded as you use them, making Station lighter on your CPU than most browsers.",
          "tag": "Work faster",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": bookmark
          },
          "title": "Easy Bookmark",
          "content": "Keep any page easily accessible at all times, what else?",
          "tag": "Tailor your workflow",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": app_store
          },
          "title": "App Store",
          "content": "With 600 web apps and counting, you'll find all you need in our public app store.",
          "tag": "Centralize everything",
          "ribbon": null
        }
      },
      {
        "slice_type": "featurecard",
        "slice_label": null,
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 700,
              "height": 454
            },
            "alt": null,
            "copyright": null,
            "url": custom_app
          },
          "title": "Custom Apps",
          "content": "Add public, team specific or private apps to your Station with just a few clicks.",
          "tag": "Tailor your workflow",
          "ribbon": "Popular"
        }
      }
    ],
    "seo_title": "Station • Features",
    "seo_description": "With Station, you'll work faster & better: here's how.",
    "seo_image": {
      "dimensions": {
        "width": 1200,
        "height": 630
      },
      "alt": null,
      "copyright": null,
      "url": seo
    }
  };

  const DOWNLOAD = {
    "button_text": "Download for free",
    "button_url": {
      "url": "https://github.com/getstation/desktop-app/releases/latest"
    },
    "button_url_mobile": {
      "url": "https://github.com/getstation/desktop-app/releases/latest"
    }
  };
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
      <div
        className={css({
          backgroundImage: `linear-gradient(to top, ${DATA.main_gradient_bottom ||
            'transparent'}, ${DATA.main_gradient_top || 'transparent'})`,
        })}
      >
        <FeatureCards data={DATA} download={DOWNLOAD} />
      </div>
    </App>
  );
};

export default FeaturesPage;
