import React from 'react';
import Auth0Lock from "auth0-lock";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import PrivacyLogin from './privacy/PrivacyLogin';
import Offboarding from './privacy/Offboarding';
import OffboardingCancel from './privacy/OffboardingCancel';
import OffboardingComplete from './privacy/OffboardingComplete';
import OffboardingFail from './privacy/OffboardingFail';

import { httpLink, authLink } from '../../utils/apollo';

class PrivacyBox extends React.Component {
  constructor(props) {
    super(props);

    // Will hold Apollo Client
    this.client = null;
    // Init Auth0 Lock
    this.lock = this.initLock();

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
  
  initLock() {
    return new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
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
  }

  async componentDidMount() {
    // Closure to get rid of this binding problems
    const lock = this.lock;
    const handleAuthentication = this.handleAuthentication;

    // Check user's session
    lock.checkSession({}, function (error, authResult) {
      if (error || !authResult) {
        lock.show();
      } else {
        // User has an active session, so we can use the accessToken directly.
        lock.getUserInfo(authResult.accessToken, handleAuthentication(authResult.idToken));
      }
    });

    // Register authentication listener
    lock.on("authenticated", authResult => {
      lock.getUserInfo(authResult.accessToken, handleAuthentication(authResult.idToken));
    });
  }

  handleAuthentication = (idToken) => (error, profile) => {
    if (error) throw new Error(error.original);

    // Init an Apollo Client
    this.client = new ApolloClient({
      link: authLink(idToken).concat(httpLink),
      cache: new InMemoryCache(),
    });

    // Update state
    this.setState({
      profile,
      isAuthenticated: true,
      route: 'offboarding',
    });
  }

  navigate(route) {
    this.setState({ route });
  }

  onLogin() {
    this.lock.show();
  }

  onLogout() {
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
        <ApolloProvider client={this.client}>
          <Offboarding
            navigate={this.navigate}
            logout={this.onLogout}
            profile={profile}
          ></Offboarding>
        </ApolloProvider>
      );
    }

    return (<PrivacyLogin login={this.onLogin}></PrivacyLogin>);
  }
}

export default PrivacyBox;
