import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';

const noop = () => {};
const noopWebAuth = {
  logout: noop,
  authorize: noop,
  parseHash: noop,
  checkSession: noop,
};

const initialAuthState = {
  isLoggedIn: false,
  user: null,
  tokens: null,
};

// ref can be mutated but not `authState` properties
let authState = initialAuthState;

const setAuthState = (authResult) => {
  authState = {
    tokens: {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),
    },
    user: authResult.idTokenPayload,
    isLoggedIn: true,
  };
};

const auth = isBrowser
  ? new (require('auth0-js').default.WebAuth)({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      redirectUri: `${window.location.origin}/delete-account-auth0-callback`,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : noopWebAuth ;

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return Boolean(authState.isLoggedIn);
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
    return cb();
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    setAuthState(authResult);
    navigate('/delete-account');
    return cb();
  }
};

export const checkSession = callback => {
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

  return authState.user;
};

export const getTokens = () => {
  if (!isBrowser) {
    return;
  }

  return authState.tokens;
};

export const logout = (uri = '') => {
  authState = initialAuthState;
  if (isBrowser) {
    const origin = window.location.origin;
    auth.logout({ returnTo: `${origin}${uri}` });
  }
};
