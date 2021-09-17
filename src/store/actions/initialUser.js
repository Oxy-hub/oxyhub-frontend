import { STORE_INITIAL_USER, REMOVE_INITIAL_USER } from '../constants';

export const storeInitialUser = data => ({
  type: STORE_INITIAL_USER,
  payload: data
});

export const removeInitialUser = () => ({
  type: REMOVE_INITIAL_USER
});
