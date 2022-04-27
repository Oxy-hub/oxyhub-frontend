import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from '../../../lib/axios';
import { storeAuthToken, resetAuth } from '../../../store/actions';

export const registerUser = values =>
  axios
    .post('/users', { ...values }, { skipAuthRefresh: true })
    .then(res => res.data);

const useRegisterUser = dispatch => {
  const navigate = useNavigate();

  return useMutation(registerUser, {
    onSuccess: ({ data }) => {
      dispatch(resetAuth());
      dispatch(storeAuthToken(data.access_token));
      navigate('/search');
    },
    onError: err => {
      // Show toast message with error
      console.log(err);
    }
  });
};

export default useRegisterUser;
