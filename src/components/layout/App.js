import React from 'react';
import PropTypes from 'prop-types';
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
        <Header header={this.props.header} />
        <main
          className={css({
            padding: rem('20px'),
            flexGrow: 1,
          })}
        >
          {this.props.children}
        </main>
        <Footer footer={this.props.footer} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
