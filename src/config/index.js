const setBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return process.env.REACT_APP_API_BASE_URL_PROD;

    case 'test':
      return process.env.REACT_APP_API_BASE_URL_TEST;

    default:
      return process.env.REACT_APP_API_BASE_URL_DEV;
  }
};

export default {
  baseURL: setBaseUrl(),
  enableMock: process.env.REACT_APP_MOCK_API
};
