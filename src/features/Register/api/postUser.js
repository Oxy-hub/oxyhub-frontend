import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const queryClient = useQueryClient();

export const postUser = data => axios.post('/user', { ...data });

export const usePostUser = () =>
  useMutation(postUser, {
    onError: () => {
      // Push error notification to redux
    },
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    }
  });
