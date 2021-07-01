import { STORE_ACCESS_TOKEN } from '../constants';
import axios from 'axios';

export const getTokens = idToken => {
  return dispatch => {
    axios
      .post(
        'http://localhost:8000/auth',
        {
          idToken: idToken,
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log('this is response', response.data);
        dispatch({
          type: STORE_ACCESS_TOKEN,
          payload: response.data, //TEMPORARY
        });
      });
  };
};
