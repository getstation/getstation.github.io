import auth0 from 'auth0-js';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      redirectUri: `${process.env.AUTH0_CALLBACK}/delete-account-auth0-callback`,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : {};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem('isLoggedIn') === 'true';
};

export const login = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize();
};

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    console.error(err);
    logout('/delete-account');
    // navigate('/');
    cb();
    return;
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    const tokens = {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),
    };

    localStorage.setItem('user', JSON.stringify(authResult.idTokenPayload));
    localStorage.setItem('tokens', JSON.stringify(tokens));
    localStorage.setItem('isLoggedIn', true);
    navigate('/delete-account');
    cb();
  }
};

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback();
  auth.checkSession({}, setSession(callback));
};

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  auth.parseHash(setSession());
};

export const getProfile = () => {
  if (!isBrowser) {
    return;
  }

  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : undefined;
};

export const getTokens = () => {
  if (!isBrowser) {
    return;
  }

  const tokens = localStorage.getItem('tokens');
  return tokens ? JSON.parse(tokens) : undefined;
};

export const logout = (uri = '') => {
  localStorage.setItem('user', '');
  localStorage.setItem('tokens', '');
  localStorage.setItem('isLoggedIn', false);
  auth.logout({ returnTo: `${process.env.AUTH0_CALLBACK}${uri}` });
};
