import React from 'react';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import styled from 'react-emotion';
import Header from '../organims/Header';
import Footer from '../organims/Footer';
import { mqNavMobile } from '../../styles/breackpoint';
import * as colors from '../../styles/colors';
import '../../styles/global';

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  margin-top: ${rem(-88)};
  flex-grow: 1;
`;

class App extends React.Component {
  state = {
    navMobileOpen: false,
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
        <Headroom>
          <Header
            theme={this.props.headerTheme}
            navMobileOpen={this.state.navMobileOpen}
            header={this.props.data.header}
            download={this.props.data.download}
            toggleNavMobile={this.toggleNavMobile}
          />
        </Headroom>

        <Main>{this.props.children}</Main>
        <Footer
          footer={this.props.data.footer}
          download={this.props.data.download}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default props => (
  <StaticQuery
    query={graphql`
      query {
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
        header: prismicHeader {
          data {
            logo {
              url
              dimensions {
                width
                height
              }
            }
            logo_alt_text
            links {
              text
              url
              type
            }
            download_text
            download_tracking_class
          }
        }
        footer: prismicFooter {
          data {
            download_tracking_class
            gradient_top
            gradient_bottom
            reward_title
            reward_subtitle
            reward_url
            column_1_title
            column_2_title
            column_3_title
            column_1_list {
              type
              text
              url
            }
            column_2_list {
              type
              text
              url
              tooltip
            }
            column_3_list {
              type
              text
              url
            }
            socials_links {
              type
              url
            }
          }
        }
      }
    `}
    render={data => <App data={data} {...props} />}
  />
);
