import setBaseUrl from './setBaseUrl';
import setGithubConfig from './setGithubConfig';

export default {
  baseURL: setBaseUrl(),
  github: setGithubConfig(),
  enableMock: process.env.REACT_APP_MOCK_API
};
