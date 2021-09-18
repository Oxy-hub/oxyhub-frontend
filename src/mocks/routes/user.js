// eslint-disable-next-line
import { rest } from 'msw';
import userHandlers from '../handlers/user';

export default [
  rest.get('http://localhost:8000/user', userHandlers.getUser),
  rest.post('http://localhost:8000/user', userHandlers.postUser)
];
