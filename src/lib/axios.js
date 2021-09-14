import axios from 'axios';
import config from '../config';

const Axios = axios.create({
  baseURL: config.baseURL
});

export default Axios;
