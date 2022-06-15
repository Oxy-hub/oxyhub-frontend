import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import axios from '../../../lib/axios';

export const putRazorpayConfirmation = data =>
  axios.put('/orders', data).then(res => res.data);

export const usePutRazorpayConfirmation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(putRazorpayConfirmation, {
    mutationKey: 'putRazorpayConfirmation',
    onSuccess: () => {
      navigate('/orders');
      queryClient.resetQueries('orders', { exact: true });
    },
    onFailure: () => {
      navigate('/orders');
      queryClient.resetQueries('orders', { exact: true });
    }
  });
};
