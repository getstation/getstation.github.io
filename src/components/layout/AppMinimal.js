import React from 'react';
import { rem } from 'polished';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import styled from 'react-emotion';
import Wrapper from '../layout/Wrapper';
import * as colors from '../../styles/colors';
import '../../styles/global';

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  margin-top: ${rem(-88)};
  flex-grow: 1;
`;

class App extends React.Component {
  state = {};
  render() {
    const DATA = this.props.data.header.data;
    return (
      <div
        className={css({
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: colors.light,
        })}
      >
        <Helmet>
          <html lang="en" />
        </Helmet>
        <div
          className={css`
            position: fixed;
            left: 0;
            right: 0;
            top: 24px;
          `}
        >
          <Wrapper>
            <Link to="/">{DATA.logo.url && <img src={DATA.logo.url} />}</Link>
          </Wrapper>
        </div>
        <Main>{this.props.children}</Main>
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
        header: prismicHeader {
          data {
            logo {
              url
              dimensions {
                width
                height
              }
            }
          }
        }
      }
    `}
    render={data => <App data={data} {...props} />}
  />
);
