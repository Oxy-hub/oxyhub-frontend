module.exports = {
  github: {
    clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
    scope: process.env.REACT_APP_GITHUB_SCOPE,
    redirectUrl: process.env.REACT_APP_GITHUB_REDIRECT_URL
  },
  google: {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: process.env.REACT_APP_GOOGLE_SCOPE,
    redirectUrl: process.env.REACT_APP_GOOGLE_REDIRECT_URL
  },
  razorpayKeyId: process.env.REACT_APP_RAZORPAY_KEY_ID,
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  apiPrefix: process.env.REACT_APP_API_PREFIX,
  enableMock: process.env.REACT_APP_MOCK_API
};
