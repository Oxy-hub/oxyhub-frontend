// eslint-disable-next-line
import { rest } from 'msw';
import authHandlers from '../handlers/auth';

export default [
  rest.post('http://localhost:8000/auth/github', authHandlers.loginWithGithub)
];
