import cryptoRandomString from 'crypto-random-string';
import config from '../../../config';

export const googleAuthHelper = () => {
  // Logic for what happens when Login with Google button is clicked
  const state = cryptoRandomString({ length: 10, type: 'url-safe' });
  const CLIENT_ID = config.google.clientId;
  const SCOPE = config.google.scope;
  const REDIRECT_URL = config.google.redirectUrl;

  localStorage.setItem('__oAuth_state__', state);

  return {
    url: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URL}&state=${state}&response_type=code`,
    popupContext: 'googleOAuth'
  };
};

export const githubAuthHelper = () => {
  // Logic for what happens when Login with Github button is clicked
  const state = cryptoRandomString({ length: 10, type: 'url-safe' });

  const CLIENT_ID = config.github.clientId;
  const SCOPE = config.github.scope;
  const REDIRECT_URL = config.github.redirectUrl;

  localStorage.setItem('__oAuth_state__', state);

  return {
    url: `https://github.com/login/oauth/authorize?scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${state}`,
    popupContext: 'githubOAuth'
  };
};
