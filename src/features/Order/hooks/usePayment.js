import useRazorpay from 'react-razorpay';
import { useNavigate } from 'react-router-dom';

import config from '../../../config';
import { usePutRazorpayConfirmation } from '../api/putRazorpayConfirmation';

const usePayment = () => {
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const { mutate } = usePutRazorpayConfirmation();

  const makePayment = ({ ...rest }) => {
    const rzp1 = new Razorpay({
      ...rest,
      name: 'Oxyhub',
      currency: 'INR',
      key: config.razorpayKeyId,
      handler: res => {
        mutate({
          razorpay_payment_id: res.razorpay_payment_id,
          razorpay_order_id: res.razorpay_order_id,
          razorpay_signature: res.razorpay_signature
        });
      },
      modal: {
        ondismiss() {
          // redirect to orders
          navigate('/orders');
        }
      }
    });

    rzp1.on('payment.failed', () => {
      // redirect to orders
      navigate('/orders');
    });

    rzp1.open();
  };

  return { makePayment };
};

export default usePayment;
