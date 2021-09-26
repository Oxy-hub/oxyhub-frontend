// eslint-disable-next-line
import { rest } from 'msw';
import districtHandlers from '../handlers/district';

export default [
  rest.get('http://localhost:8000/district', districtHandlers.getDistricts)
];
