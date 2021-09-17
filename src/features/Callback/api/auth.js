import { useMutation } from 'react-query';
import { storeInitialUser, storeAuthToken } from '../../../store/actions';
import axios from '../../../lib/axios';

export const mutationFunction = ({ body, provider }) =>
  axios.post(`/auth/${provider}`, body).then(res => res.data);

const useAuth = dispatch =>
  useMutation(mutationFunction, {
    retry: false,

    onSuccess: data => {
      if (data.isInitial) {
        dispatch(storeInitialUser(data));
      } else {
        dispatch(storeAuthToken(data.accessToken));
      }
    }
  });

export default useAuth;
