import React from 'react';
// import Auth0Lock from "auth0-lock";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider as VanillaApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'react-jss';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import PrivacyLogin from './privacy/PrivacyLogin';
import Offboarding from './privacy/Offboarding';
import OffboardingCancel from './privacy/OffboardingCancel';
import OffboardingComplete from './privacy/OffboardingComplete';
import OffboardingFail from './privacy/OffboardingFail';

import * as firebase from 'firebase/app';
// see https://firebase.google.com/docs/web/setup
import 'firebase/auth';
// import { FirebaseAuthProvider } from '@getstation/use-firebase-auth';

import { ApolloProvider, FirebaseAuthProvider } from '@getstation/authentication';
import { BrowserXThemeProvider, withBrowserXTheme } from '@getstation/theme';

import { httpLink, authLink } from '../../utils/apollo';

// Used to extract `react-jss`'s Theme provided with `react-jss` v8
// in `@getstation/theme` and provide it back in `react-jss` v10.
const ThemeForwarder = withBrowserXTheme(ThemeProvider);

class PrivacyBox extends React.Component {
  constructor(props) {
    super(props);

    // Init Apollo Client
    this.client = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });

    // Init firebase app
    this.firebaseApp = firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      appId: process.env.FIREBASE_APP_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    });

    // Bind necessary functions
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
    // return new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
    //   autoclose: true,
    //   auth: { redirect: false },
    //   container: 'login-box',
    //   theme: {
    //     logo: 'https://assets.getstation.com/emails/facebook-profile.png',
    //     primaryColor: '#164d7f',
    //   },
    //   languageDictionary: {
    //     title: "Station"
    //   },
    // });
  }

  async componentDidMount() {
    // Closure to get rid of this binding problems
    // const lock = this.lock;
    const handleAuthentication = this.handleAuthentication;

    // Check user's session
    // lock.checkSession({}, function (error, authResult) {
    //   if (error || !authResult) {
    //     lock.show();
    //   } else {
    //     // User has an active session, so we can use the accessToken directly.
    //     lock.getUserInfo(authResult.accessToken, handleAuthentication(authResult.idToken));
    //   }
    // });

    // // Register authentication listener
    // lock.on("authenticated", authResult => {
    //   lock.getUserInfo(authResult.accessToken, handleAuthentication(authResult.idToken));
    // });
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

  getProfileFromFirebaseUser(user) {
    const [firstName] = user.displayName.split(String.fromCharCode(160));
    return {
      email: user.email,
      given_name: firstName,
    }
  }

  onAuthenticated = (credential) => {
    if (credential.user) {
      this.setState({
        profile: this.getProfileFromFirebaseUser(credential.user),
        isAuthenticated: true,
        route: 'offboarding',
      });
    }
  }

  onLogout() {
    // this.lock.logout();
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
        <VanillaApolloProvider client={this.client}>
          <Offboarding
            navigate={this.navigate}
            logout={this.onLogout}
            profile={profile}
          ></Offboarding>
        </VanillaApolloProvider>
      );
    }

    return (
      <BrowserXThemeProvider>
        <ThemeForwarder>
          <ApolloProvider client={this.client}>
            <FirebaseAuthProvider firebase={firebase}>
              <PrivacyLogin onAuthenticated={this.onAuthenticated}></PrivacyLogin>
            </FirebaseAuthProvider>
          </ApolloProvider>
        </ThemeForwarder>
      </BrowserXThemeProvider>
    );
  }
}

export default PrivacyBox;
