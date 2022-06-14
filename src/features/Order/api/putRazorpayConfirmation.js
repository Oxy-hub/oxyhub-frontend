import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import axios from '../../../lib/axios';

export const putRazorpayConfirmation = data =>
  axios.put('/orders', data).then(res => res.data);

export const usePutRazorpayConfirmation = () => {
  const navigate = useNavigate();
  return useMutation(putRazorpayConfirmation, {
    mutationKey: 'putRazorpayConfirmation',
    onSuccess: () => {
      navigate('/orders');
    },
    onFailure: () => {
      navigate('/orders');
    }
  });
};
