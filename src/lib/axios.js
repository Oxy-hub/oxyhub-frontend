import axios from 'axios';
import { apiBaseUrl, apiPrefix } from '../config';

let ACCESS_TOKEN = null;

export const setAccessToken = accessToken => {
  ACCESS_TOKEN = accessToken;
};

const axiosInit = ({ authorized = true, additionalConfig = {} }) =>
  axios.create({
    baseURL: `${apiBaseUrl}${apiPrefix}`,
    withCredentials: true,
    ...additionalConfig,
    ...(authorized && { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
  });

export default axiosInit;
