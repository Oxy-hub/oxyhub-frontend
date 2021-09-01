import { AUTHENTICATE_USER, INITIAL_USER, REMOVE_AUTH } from '../constants';

export const updateAuth = data => ({
  type: data.isInitial ? INITIAL_USER : AUTHENTICATE_USER,
  payload: data.access_token
});

export const removeAuth = () => ({
  type: REMOVE_AUTH
});
