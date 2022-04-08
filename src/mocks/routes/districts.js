// eslint-disable-next-line
import { rest } from 'msw';
import districtHandlers from '../handlers/districts';

export default [
  rest.get('http://localhost:8000/districts', districtHandlers.getDistricts)
];
