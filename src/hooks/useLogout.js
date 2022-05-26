import { useMutation } from 'react-query';
import axios from '../lib/axios';
import useBrodcastChannel from './useBrodcastChannel';

const logoutUser = () => axios.post('/logout');

const useLogout = () => {
  const { postMessage } = useBrodcastChannel('auth');

  return useMutation(logoutUser, {
    onSuccess: () => {
      postMessage('logout');
    }
  });
};

export default useLogout;
