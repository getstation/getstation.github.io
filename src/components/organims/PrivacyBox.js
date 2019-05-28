import React from 'react';
import Auth0Lock from "auth0-lock";
import {Link, RichText, Date} from 'prismic-reactjs';

import SectionMinimal from '../molecules/SectionMinimal';
import PrivacyLogin from './privacy/PrivacyLogin';
import Offboarding from './privacy/Offboarding';
import OffboardingCancel from './privacy/OffboardingCancel';
import OffboardingComplete from './privacy/OffboardingComplete';
import OffboardingFail from './privacy/OffboardingFail';

class PrivacyBox extends React.Component {
  constructor(props) {
    super(props);

    // Init Auth0 Lock
    this.lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
      autoclose: true,
      auth: { redirect: false },
      container: 'login-box',
      theme: {
        logo: 'https://assets.getstation.com/emails/facebook-profile.png',
        primaryColor: '#164d7f',
      },
      languageDictionary: {
        title: "Station"
      },
    });

    // Bind necessary functions
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.navigate = this.navigate.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);

    // Init internal State
    this.state = {
      isAuthenticated: false,
      profile: null,
      route: null,
    };
  }
  
  async componentDidMount() {
    // Closure to get rid of this binding problems
    const lock = this.lock;
    const handleAuthentication = this.handleAuthentication;

    // Check user's session
    lock.checkSession({}, function (error, authResult) {
      if (error || !authResult) {
        console.log('am I here ?');
        lock.show();
      } else {
        // User has an active session, so we can use the accessToken directly.
        lock.getUserInfo(authResult.accessToken, handleAuthentication);
      }
    });

    // Register authentication listener
    lock.on("authenticated", authResult => {
      lock.getUserInfo(authResult.accessToken, handleAuthentication);
    });
  }

  handleAuthentication(error, profile) {
    if (error) {
      console.log('Or am I here ?');
      throw new Error(error);
    }

    console.info('Logged in');
    console.log(profile);
    this.setState({
      profile,
      isAuthenticated: true,
      route: 'offboarding',
    });
  }

  navigate(route) {
    console.log('Navigating to: ', route);
    this.setState({ route });
  }

  onLogin() {
    this.lock.show();
  }

  onLogout() {
    console.info('Login out');
    this.lock.logout();
  }

  render() {
    const { isAuthenticated, route, profile } = this.state;

    switch (route) {
      case 'cancelled':
        return (<OffboardingCancel navigate={this.navigate} logout={this.onLogout}></OffboardingCancel>);
      case 'confirmed':
        return (<OffboardingComplete navigate={this.navigate} logout={this.onLogout}></OffboardingComplete>);
      case 'failed':
        return (<OffboardingFail navigate={this.navigate}></OffboardingFail>);
    }

    if (isAuthenticated || route === 'offboarding') {
      return (
        <Offboarding
          navigate={this.navigate}
          logout={this.onLogout}
          profile={profile}
        ></Offboarding>
      );
    }

    return (<PrivacyLogin login={this.onLogin}></PrivacyLogin>);
  }
}

export default PrivacyBox;
