import load from 'load-script';
import { useMutation } from 'react-query';

import config from '../../../config';
import axios from '../../../lib/axios';

export const getRazorpayOrderId = data =>
  axios.post('/orders', data).then(res => res.data);

export const useGetRazorpayOrderId = () =>
  useMutation(getRazorpayOrderId, {
    mutationKey: 'getRazorpayOrderId',
    onMutate: () => {
      load('https://checkout.razorpay.com/v1/checkout.js');
    },
    onSuccess: data => {
      console.log(data);
      console.log(config);
      const razorpayOptions = {
        currency: 'INR',
        amount: data.data.amount,
        key: config.razorpayKeyId,
        order_id: data.data.orderId,
        readonly: { email: true, contact: true },
        prefill: {
          name: 'Gaurav Kapoor',
          email: 'test@gmail.com',
          contact: '989898989898'
        }
      };

      // eslint-disable-next-line no-undef
      const rzp = new Razorpay(razorpayOptions);
      rzp.open();
    }
  });
