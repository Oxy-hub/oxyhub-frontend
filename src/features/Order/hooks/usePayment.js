import useRazorpay from 'react-razorpay';
import config from '../../../config';

const usePayment = () => {
  const Razorpay = useRazorpay();

  const makePayment = ({ ...rest }) => {
    const rzp1 = new Razorpay({
      ...rest,
      name: 'Oxyhub',
      currency: 'INR',
      key: config.razorpayKeyId,
      handler: () => {
        console.log('Do Something');
      }
    });

    rzp1.on('payment.failed', response => {
      console.log('Error', response);
    });

    rzp1.open();
  };

  return { makePayment };
};

export default usePayment;
