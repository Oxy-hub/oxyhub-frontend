import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { apiBaseUrl, apiPrefix } from '../config';

let ACCESS_TOKEN = null;

export const setAccessToken = accessToken => {
  ACCESS_TOKEN = accessToken;
};

const Axios = axios.create({
  baseURL: `${apiBaseUrl}${apiPrefix}`,
  withCredentials: true
});

Axios.interceptors.request.use(config => {
  if (ACCESS_TOKEN) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    };
  }
  return config;
});

const refreshAuthLogic = failedRequest => {
  if (failedRequest.response.data.error.errors[0] === 'Access token expired')
    return Axios.get('/refresh', { skipAuthRefresh: true }).then(({ data }) => {
      setAccessToken(data.access_token);
      return Promise.resolve();
    });
  return Promise.reject();
};

createAuthRefreshInterceptor(Axios, refreshAuthLogic);

export default Axios;
