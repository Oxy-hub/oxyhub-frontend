import { STORE_USER, REMOVE_USER } from '../constants';

export const storeUser = data => ({
  type: STORE_USER,
  payload: data
});

export const removeUser = () => ({
  type: REMOVE_USER
});
