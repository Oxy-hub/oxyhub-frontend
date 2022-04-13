import { useMutation } from 'react-query';
// import { useNavigate } from 'react-router-dom';
import {
  storeInitialUser,
  storeAuthToken,
  unsetLoader
} from '../../../store/actions';
import axios from '../../../lib/axios';

export const mutationFunction = ({ code, provider }) =>
  axios.post(`/auth/login`, { code, provider }).then(res => res.data);

const useAuth = dispatch =>
  useMutation(mutationFunction, {
    retry: false,

    onSuccess: data => {
      const { data: response } = data;
      if (response.is_initial) {
        dispatch(
          storeInitialUser({
            initialUserInfo: response.user,
            accessToken: response.access_token
          })
        );
        // navigate('/register');
      } else {
        dispatch(storeAuthToken(response.accessToken));
        // navigate('/search');
      }
    },

    onError: () => {
      // Dispatch a toast message with the following message.
      console.log('Something went wrong while trying to login!');
    },

    onSettled: () => {
      dispatch(unsetLoader());
    }
  });

export default useAuth;
