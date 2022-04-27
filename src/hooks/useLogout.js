import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from '../lib/axios';
import { resetAuth, unsetLoader } from '../store/actions';

const logoutUser = () => axios.post('/logout');

const useLogout = dispatch => {
  const navigate = useNavigate();

  return useMutation(logoutUser, {
    onSuccess: () => {
      dispatch(resetAuth());
      navigate('/');
      dispatch(unsetLoader());
    }
  });
};

export default useLogout;
