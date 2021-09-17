import { STORE_TOKEN, REMOVE_TOKEN } from '../constants';

export const storeAuthToken = data => ({
  type: STORE_TOKEN,
  payload: data
});

export const removeAuthToken = () => ({
  type: REMOVE_TOKEN
});
