import setBaseUrl from './setBaseUrl';
import setGithubConfig from './setGithubConfig';

export default {
  baseURL: setBaseUrl(),
  github: setGithubConfig(),
  google: {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: process.env.REACT_APP_GOOGLE_SCOPE,
    redirectUrl: process.env.REACT_APP_GOOGLE_REDIRECT_URL
  },
  enableMock: process.env.REACT_APP_MOCK_API
};
