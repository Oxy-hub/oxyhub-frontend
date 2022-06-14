import { useMutation } from 'react-query';

import axios from '../../../lib/axios';
import usePayment from '../hooks/usePayment';

export const getRazorpayOrderId = data =>
  axios.post('/orders', data).then(res => res.data);

export const useGetRazorpayOrderId = () => {
  const { makePayment } = usePayment();
  return useMutation(getRazorpayOrderId, {
    mutationKey: 'getRazorpayOrderId',
    onSuccess: data => {
      const razorpayOptions = {
        amount: data.data.amount,
        order_id: data.data.order_id
      };
      makePayment(razorpayOptions);
    }
  });
};
