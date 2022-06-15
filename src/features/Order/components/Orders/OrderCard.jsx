/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import dayjs from 'dayjs';
import {
  Box,
  HStack,
  VStack,
  Spacer,
  Text,
  Flex,
  Button
} from '@chakra-ui/react';

import usePayment from '../../hooks/usePayment';
import { ReactComponent as OrderFailure } from '../../assets/payment-failure.svg';
import { ReactComponent as OrderSuccess } from '../../assets/payment-success.svg';

// eslint-disable-next-line react/prop-types
const OrderCard = ({ order }) => {
  const {
    created_at,
    razorpay,
    pricing,
    payment_status,
    product_info,
    store_info
  } = order;
  const { makePayment } = usePayment();

  const handlePayment = () => {
    const razorpayOptions = {
      amount: pricing.total,
      order_id: razorpay.order_id
    };
    makePayment(razorpayOptions);
  };

  return (
    <Box borderRadius="4px" border="2px dashed" borderColor="neutral.500">
      {/* Card Header Section */}
      <Box
        px={7}
        py={4}
        borderBottom="1px dashed"
        borderColor="neutral.500"
        backgroundColor="neutral.150"
      >
        <Flex>
          <HStack spacing={20}>
            {/* Order Placing Date */}
            <VStack spacing={2} align="flex-start">
              <Text textStyle="omega" as="h3" opacity={0.7}>
                Order palced
              </Text>
              <Text textStyle="omegaSemibold">
                {dayjs(created_at).format('MMMM D, YYYY')}
              </Text>
            </VStack>
            {/* Total Amount */}
            <VStack spacing={2} align="flex-start">
              <Text textStyle="omega" as="h3" opacity={0.7}>
                Total
              </Text>
              <Text textStyle="omegaSemibold">{`₹ ${pricing.total}`}</Text>
            </VStack>
          </HStack>

          <Spacer />

          {/* Order ID */}
          <VStack spacing={2} align="flex-start">
            <Text textStyle="omega" as="h3" opacity={0.7}>
              Order Id
            </Text>
            <Text textStyle="omegaSemibold">{razorpay.order_id}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Body of the card */}
      <Box px={7} py={5}>
        {/* Order Details */}
        <Flex alignItems="center">
          <HStack spacing={8} align="flex-start">
            <Box maxWidth="120px">
              {payment_status === 'Pending' ? (
                <OrderFailure style={{ width: '100%', height: '100%' }} />
              ) : (
                <OrderSuccess style={{ width: '100%', height: '100%' }} />
              )}
            </Box>

            <VStack align="flex-start" spacing={3.5}>
              <Text textStyle="delta" as="h3">
                {store_info.name}
              </Text>

              <VStack align="flex-start" spacing={0.5}>
                <Text textStyle="omega" opacity={0.9}>
                  {store_info.location.address}
                </Text>
                <Text textStyle="omega" opacity={0.9}>
                  {store_info.location.district}
                </Text>
                <Text textStyle="omega" opacity={0.9}>
                  {`${store_info.location.state_code} - ${store_info.location.pincode}`}
                </Text>
              </VStack>

              <Text textStyle="omegaSemibold" opacity={0.9}>
                9156424259
              </Text>
            </VStack>
          </HStack>

          <Spacer />

          <Box>
            <Text textStyle="delta" as="h3" mb={2.5} opacity={0.7}>
              Type & Variant
            </Text>

            <Box
              px={1}
              py={2}
              m="0 auto"
              borderRadius="4px"
              border="1px dashed"
              borderColor="neutral.500"
              backgroundColor="neutral.150"
            >
              <Text textStyle="omegaSemibold" textAlign="center">
                {product_info.type}
              </Text>
              <Text textStyle="omegaSemibold" textAlign="center">
                {product_info.variant}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Payment Status Section */}
      <Box px={7} py={5} borderTop="1px solid" borderColor="neutral.200">
        <Flex justifyContent="right">
          <HStack>
            <Text>Payment Status : </Text>
            <Text
              textStyle="omegaSemibold"
              color={
                payment_status === 'Pending' ? 'danger.700' : 'success.600'
              }
            >
              {payment_status}
            </Text>
          </HStack>
          <Spacer />
          {payment_status === 'Pending' && (
            <Button onClick={handlePayment}>Complete Payment</Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default OrderCard;
