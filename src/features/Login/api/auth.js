import { useMutation } from 'react-query';
import {
  storeInitialUser,
  storeAuthToken,
  unsetLoader
} from '../../../store/actions';
import axiosInit from '../../../lib/axios';

export const mutationFunction = ({ code, provider }) => {
  const axios = axiosInit({ authorized: false });
  return axios.post(`/auth/login`, { code, provider }).then(res => res.data);
};

const useAuth = dispatch =>
  useMutation(mutationFunction, {
    retry: false,

    onSuccess: ({ data }) => {
      if (data.is_initial) {
        dispatch(
          storeInitialUser({
            initialUserInfo: data.user,
            accessToken: data.access_token
          })
        );
      } else {
        dispatch(storeAuthToken(data.access_token));
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
