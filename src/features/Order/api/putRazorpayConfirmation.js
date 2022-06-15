import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import axios from '../../../lib/axios';

import useChakraToast from '../../../hooks/useChakraToast';

export const putRazorpayConfirmation = data =>
  axios.put('/orders', data).then(res => res.data);

export const usePutRazorpayConfirmation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { toast, toastOptions } = useChakraToast();

  return useMutation(putRazorpayConfirmation, {
    mutationKey: 'putRazorpayConfirmation',
    onSuccess: () => {
      navigate('/orders');
      queryClient.resetQueries('orders', { exact: true });
      toast({
        title: 'Payment Successfull!',
        status: toastOptions.success
      });
    },
    onFailure: () => {
      navigate('/orders');
      queryClient.resetQueries('orders', { exact: true });
      toast({
        title: 'Payment Failed!',
        status: toastOptions.error
      });
    }
  });
};
