import { nanoid } from 'nanoid';
import { Text, VStack, Divider, Container } from '@chakra-ui/react';

import OrderCard from './OrderCard';
import { useGetOrders } from '../../api/getOrders';
import { LoadingSkeleton } from '../../../../components/Elements';

const Orders = () => {
  const { data: orderData, isFetching } = useGetOrders();

  return (
    <Container maxW="container.lg">
      <VStack align="stretch" spacing={6}>
        <Text textStyle="alpha" as="h1">
          My Orders
        </Text>

        <Divider />

        {/* Order card */}
        <VStack spacing={8} align="stretch">
          {orderData.data.orders.map(order =>
            isFetching ? (
              <LoadingSkeleton height={230} />
            ) : (
              <OrderCard key={nanoid()} order={order} />
            )
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Orders;
