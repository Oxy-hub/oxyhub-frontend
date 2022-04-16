import axios from 'axios';
import config from '../config';

const Axios = axios.create({
  baseURL: `${config.apiBaseUrl}${config.apiPrefix}`,
  withCredentials: true
});

export default Axios;
