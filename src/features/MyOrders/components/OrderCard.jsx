import {
  Box,
  HStack,
  Spacer,
  Text,
  Flex,
  Divider,
  Button
} from '@chakra-ui/react';
import { ReactComponent as OrderImg } from '../assets/order-card.svg';

const OrderCard = () => (
  <Box
    border="2px dashed"
    borderColor="neutral.500"
    // w="80%"
    // m="0 auto"
    borderRadius="4px"
    mb={8}
  >
    {/* Card Heading */}
    <Box
      backgroundColor="neutral.150"
      px={7}
      py={4}
      borderBottom="1px dashed"
      borderColor="neutral.500"
    >
      <Flex>
        <HStack spacing={20}>
          <Box>
            <Text textStyle="omega" as="h3" opacity={0.7} mb={2}>
              Order palced
            </Text>
            <Text textStyle="omegaSemibold">12/6/2022</Text>
          </Box>
          <Box>
            <Text textStyle="omega" as="h3" opacity={0.7} mb={2}>
              Total
            </Text>
            <Text textStyle="omegaSemibold">₹ 1600</Text>
          </Box>
        </HStack>

        <Spacer />

        <Box>
          <Text textStyle="omega" as="h3" opacity={0.7} mb={2}>
            Order Id
          </Text>
          <Text textStyle="omegaSemibold">#546584687654HNJDKDUE</Text>
        </Box>
      </Flex>
    </Box>
    {/* Card Heading */}

    {/* Body of the card */}
    <Box px={7} py={5}>
      {/* Order Details */}
      <Flex mb={4} alignItems="center">
        <HStack spacing={8} align="flex-start">
          <Box w="150px">
            <OrderImg style={{ width: '100%', height: '100%' }} />
          </Box>

          <Box>
            <Text textStyle="delta" as="h3" mb={2.5}>
              The Best Parlour
            </Text>
            <Box mb={2.5}>
              <Text textStyle="omega" opacity={0.9}>
                6422, Niero Glenns
              </Text>
              <Text textStyle="omega" opacity={0.9}>
                Bardhaman
              </Text>
              <Text textStyle="omega" opacity={0.9}>
                Andaman and Nicobar Islands
              </Text>
            </Box>

            <Text textStyle="omegaSemibold" opacity={0.9}>
              9156424259
            </Text>
          </Box>
        </HStack>

        <Spacer />

        <Box>
          <Text textStyle="delta" as="h3" mb={2.5} opacity={0.7}>
            Type / Variant
          </Text>

          <Box
            border="1px dashed"
            borderColor="neutral.500"
            backgroundColor="neutral.150"
            borderRadius="4px"
            p={2}
            w="50%"
            m="0 auto"
          >
            <Text textStyle="omegaSemibold" textAlign="center">
              Steel
            </Text>
            <Text textStyle="omegaSemibold" textAlign="center">
              B
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* Order Details */}

      <Divider />

      {/* Rebooking button */}
      <Flex mt={4} justifyContent="right">
        <Button variant="secondary">Book Again</Button>
      </Flex>
    </Box>
  </Box>
);

export default OrderCard;
