import { STORE_USER, STORE_INITIAL_USER } from '../constants';
import axios from 'axios';

export const getUser = idToken => {
  return dispatch => {
    axios
      .post(
        'http://localhost:8000/auth',
        {
          idToken: idToken,
        },
        { withCredentials: true } //credentials : cookies.SSL certificate etc.
      )
      .then(response => {
        dispatch({
          type: response.data.first_name ? STORE_USER : STORE_INITIAL_USER,
          payload: response.data,
        });
      });
  };
};