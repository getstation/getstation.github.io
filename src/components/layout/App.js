import React from 'react';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import styled from 'react-emotion';
import Header from '../organims/Header';
import Footer from '../organims/Footer';
import { mqNavMobile } from '../../styles/breackpoint';
import * as colors from '../../styles/colors';
import '../../styles/global';
import logoStationBlue from '../../images/logo-station-blue.svg';

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  margin-top: ${rem(-88)};
  flex-grow: 1;
`;

class App extends React.Component {
  state = {
    navMobileOpen: false,
    scrollY: null,
    data: {
      "download": {
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
                "url": "https://github.com/getstation/desktop-app/releases/latest"
              }
            },
            {
              "type": "windows",
              "url": {
                "url": "https://github.com/getstation/desktop-app/releases/latest"
              }
            },
            {
              "type": "linux",
              "url": {
                "url": "https://github.com/getstation/desktop-app/releases/latest"
              }
            }
          ]
        }
      },
      "header": {
        "data": {
          "logo": {
            "url": logoStationBlue,
            "dimensions": {
              "width": 100,
              "height": 28
            }
          },
          "logo_alt_text": "Station",
          "links": [
            {
              "text": "Features",
              "url": "/features",
              "type": "internal"
            },
            {
              "text": "FAQ",
              "url": "https://github.com/getstation/desktop-app/wiki/FAQ",
              "type": "external"
            },
            {
              "text": "Github",
              "url": "https://github.com/getstation/desktop-app",
              "type": "external"
            }
          ],
          "download_text": "Download",
          "download_tracking_class": "analytics-download-station-header"
        }
      },
      "footer": {
        "data": {
          "download_tracking_class": "analytics-download-station-footer",
          "gradient_top": "#44B8DD",
          "gradient_bottom": "#130cb7",
          "column_1_title": "Product",
          "column_2_title": "About",
          "column_3_title": "Support",
          "column_1_list": [
            {
              "type": "internal",
              "text": "Features",
              "url": "/features"
            },
            {
              "type": "external",
              "text": "Release notes",
              "url": "https://github.com/getstation/desktop-app/releases"
            },
            {
              "type": "external",
              "text": "Contributing",
              "url": "https://github.com/getstation/desktop-app/blob/main/CONTRIBUTING.md"
            }
          ],
          "column_2_list": [
            {
              "type": "external",
              "text": "Contributors",
              "url": "https://github.com/getstation/desktop-app/graphs/contributors",
              "tooltip": '💙'
            },
            {
              "type": "external",
              "text": "Blog",
              "url": "https://medium.com/getstation",
              "tooltip": ""
            },
            {
              "type": "external",
              "text": "Privacy",
              "url": "https://github.com/getstation/desktop-app/wiki/FAQ#-data--privacy",
              "tooltip": null
            }
          ],
          "column_3_list": [
            {
              "type": "external",
              "text": "Report a bug",
              "url": "https://github.com/getstation/desktop-app/issues"
            },
            {
              "type": "external",
              "text": "FAQ",
              "url": "https://github.com/getstation/desktop-app/wiki/FAQ"
            }
          ],
          "socials_links": [
            {
              "type": "medium",
              "url": "https://medium.com/getstation"
            },
            {
              "type": "github",
              "url": "https://github.com/getstation/"
            }
          ]
        }
      }
    }
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll, true);
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll, true);
  };
  handleOnScroll = () => {
    const scroll = window.scrollY;
    this.setState({ scrollY: scroll || 0 });
  };
  toggleNavMobile = () => {
    this.setState(prevState => ({
      navMobileOpen: !prevState.navMobileOpen,
    }));
  };
  render() {
    return (
      <div
        className={css({
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: colors.light,
          [mqNavMobile]: {
            height: this.state.navMobileOpen ? '100vh' : 'auto',
            overflow: this.state.navMobileOpen ? 'hidden' : 'auto',
          },
        })}
      >
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Header
          theme={this.props.headerTheme}
          navMobileOpen={this.state.navMobileOpen}
          header={this.state.data.header}
          download={this.state.data.download}
          toggleNavMobile={this.toggleNavMobile}
          isFloatted={this.state.scrollY > 1}
        />

        <Main>{this.props.children}</Main>
        <Footer
          footer={this.state.data.footer}
          download={this.state.data.download}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
