// eslint-disable-next-line
import { setupWorker } from 'msw';
import auth from './routes/auth';
import refresh from './routes/refresh';
import user from './routes/user';
import states from './routes/states';

const worker = setupWorker(...auth, ...refresh, ...user, ...states);

export default worker;
