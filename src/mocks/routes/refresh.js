// eslint-disable-next-line
import { rest } from 'msw';
import refreshHandlers from '../handlers/refresh';

export default [
  rest.get('http://localhost:8000/refresh', refreshHandlers.refresh)
];
