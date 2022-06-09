import { Box, HStack, Text, Divider } from '@chakra-ui/react';
import OrderCard from './OrderCard';

const Orders = () => (
  <Box sx={{ maxWidth: '1100px' }} m="0 auto">
    <Box>
      <HStack spacing="15px" mb={4} mt={10}>
        <Text textStyle="alpha" as="h1">
          My Orders
        </Text>
      </HStack>

      <Divider />

      {/* Order card */}
      <Box mt={10}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </Box>
    </Box>
  </Box>
);

export default Orders;
