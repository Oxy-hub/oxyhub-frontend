const setGithubConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        clientId: process.env.REACT_APP_GITHUB_CLIENT_ID_PROD,
        scope: process.env.REACT_APP_GITHUB_SCOPE_PROD,
        redirectUrl: process.env.REACT_APP_GITHUB_REDIRECT_URL_PROD
      };

    case 'test':
      return {
        clientId: process.env.REACT_APP_GITHUB_CLIENT_ID_TEST,
        scope: process.env.REACT_APP_GITHUB_SCOPE_TEST,
        redirectUrl: process.env.REACT_APP_GITHUB_REDIRECT_URL_TEST
      };

    default:
      return {
        clientId: process.env.REACT_APP_GITHUB_CLIENT_ID_DEV,
        scope: process.env.REACT_APP_GITHUB_SCOPE_DEV,
        redirectUrl: process.env.REACT_APP_GITHUB_REDIRECT_URL_DEV
      };
  }
};

export default setGithubConfig;
