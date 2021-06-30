import { STORE_ACCESS_TOKEN } from '../constants';
import axios from 'axios';

export const getTokens = idToken => {
  return dispatch => {
    axios
      .post('http://localhost:8000/auth', {
        headers: { 'Content-Type': 'application/json' },
        data: {
          idToken: idToken,
        },
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: STORE_ACCESS_TOKEN,
          payload: response.data.status, //TEMPORARY
        });
      });
  };
};
