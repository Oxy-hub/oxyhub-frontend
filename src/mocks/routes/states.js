// eslint-disable-next-line
import { rest } from 'msw';
import stateHandlers from '../handlers/states';

export default [
  rest.get('http://localhost:8000/states', stateHandlers.getStates)
];
