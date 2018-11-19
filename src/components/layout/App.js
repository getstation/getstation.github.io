import React from 'react';
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
        <Helmet
          title="Station"
          meta={[
            {
              name: 'description',
              content:
                'Station unifies all your work tools in one neat & productive interface. … Station is the first smart workstation for busy people. … Station is where work gets done.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Headroom>
          <Header
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
            link_1_text
            link_2_text
            link_3_text
          }
        }
        footer: prismicFooter {
          data {
            producthunt_subtitle
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
