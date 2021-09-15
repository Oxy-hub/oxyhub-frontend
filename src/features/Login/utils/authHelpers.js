import cryptoRandomString from 'crypto-random-string';
import config from '../../../config';

export const googleAuthHelper = () => {
  // Logic for what happens when button is clicked
  console.log('Google Auth Helper');
};

export const githubAuthHelper = () => {
  // Logic for what happens when Login with Github button is clicked
  const CLIENT_ID = config.github.clientId;
  const SCOPE = config.github.scope;
  const REDIRECT_URL = config.github.redirectUrl;
  const state = cryptoRandomString({ length: 10, type: 'url-safe' });
  localStorage.setItem('isLoggingIn', true);
  localStorage.setItem('state', state);
  window.location.assign(
    `https://github.com/login/oauth/authorize?scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${state}`
  );
};
