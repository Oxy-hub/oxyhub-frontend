/* eslint-disable react/prop-types */
import { Box, Text, Radio } from '@chakra-ui/react';

const VariantSelector = ({ variant }) => (
  <Box
    px={3}
    py={3}
    boxShadow="lg"
    borderRadius="lg"
    backgroundColor="neutral.0"
  >
    <Radio value={variant.sku} size="md" isDisabled={!variant.availability}>
      <Text textStyle="epsilon">{`Variant ${variant.name} ${
        variant.availability ? ': ₹' : ''
      }${!variant.availability ? '(Out of Stock)' : variant.price.sale}`}</Text>
      <Text textStyle="pi">
        {`Height : ${variant.height}, Water capacity: ${variant.waterCapacity}, Oxygen capacity: ${variant.oxygenCapacity}`}
      </Text>
    </Radio>
  </Box>
);

export default VariantSelector;
