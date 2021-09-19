import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import axios from '../../../lib/axios';
import { storeAuthToken, removeInitialUser } from '../../../store/actions';

export const postUser = body => axios.post('/user', body).then(res => res.data);

export const usePostUser = () => {
  const dispatch = useDispatch();
  return useMutation(postUser, {
    onSuccess: data => {
      dispatch(removeInitialUser());
      dispatch(storeAuthToken(data.accessToken));
    },
    onError: err => {
      // Push error notification to redux
      console.log('Error : ', err);
      console.log('Some Error Occured');
    }
  });
};
