function GithubConfig(clientId, scope, redirectUrl) {
  this.clientId = clientId;
  this.scope = scope;
  this.redirectUrl = redirectUrl;
}

const setGithubConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return new GithubConfig(
        process.env.REACT_APP_GITHUB_CLIENT_ID_PROD,
        process.env.REACT_APP_GITHUB_SCOPE_PROD,
        process.env.REACT_APP_GITHUB_REDIRECT_URL_PROD
      );

    case 'test':
      return new GithubConfig(
        process.env.REACT_APP_GITHUB_CLIENT_ID_TEST,
        process.env.REACT_APP_GITHUB_SCOPE_TEST,
        process.env.REACT_APP_GITHUB_REDIRECT_URL_TEST
      );

    default:
      return new GithubConfig(
        process.env.REACT_APP_GITHUB_CLIENT_ID_DEV,
        process.env.REACT_APP_GITHUB_SCOPE_DEV,
        process.env.REACT_APP_GITHUB_REDIRECT_URL_DEV
      );
  }
};

export default setGithubConfig;
