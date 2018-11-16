import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rem } from 'polished';
import Header from '../organims/Header';
import Footer from '../organims/Footer';
import * as colors from '../../styles/colors';
import '../../styles/global';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          background: colors.light,
          overflowX: 'hidden',
          overflowY: 'scroll',
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
        <Header
          header={this.props.data.header}
          download={this.props.data.download}
        />
        <main
          className={css({
            padding: rem(20),
            flexGrow: 1,
          })}
        >
          {this.props.children}
        </main>
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
