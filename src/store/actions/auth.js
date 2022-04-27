import { STORE_AUTH_TOKEN, STORE_INITIAL_USER, RESET_AUTH } from '../constants';

export const storeAuthToken = data => ({
  type: STORE_AUTH_TOKEN,
  payload: data
});

export const storeInitialUser = data => ({
  type: STORE_INITIAL_USER,
  payload: data
});

export const resetAuth = () => ({
  type: RESET_AUTH
});
