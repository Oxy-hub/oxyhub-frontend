// eslint-disable-next-line
import { setupWorker } from 'msw';
import auth from './routes/auth';
import refresh from './routes/refresh';
import user from './routes/user';

const worker = setupWorker(...auth, ...refresh, ...user);

export default worker;
