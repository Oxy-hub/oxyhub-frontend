// eslint-disable-next-line
import { setupWorker, rest } from 'msw';
// import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(
  rest.get('/user/:userId', (req, res, ctx) =>
    res(
      ctx.json({
        firstName: 'John',
        lastName: 'Maverick'
      })
    )
  )
);

export default worker;
